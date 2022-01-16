---
title: Server-Side Rendered Dark Mode with SvelteKit & Cookies
date: 2022-01-16T12:08:00.000Z
videoUrl: https://www.youtube.com/watch?v=5A21S5mMijI
---

Apps with dark mode are awesome, but have you ever been blinded by one not "remembering" your preference and flashing you the light theme before switching to dark?

Let’s dodge that problem and learn how to server-side render our SvelteKit app in dark mode! Spoiler alert: we’re gonna use cookies.

**Note:** I did put a lot of effort into the video, but this lesson is a bit of a placeholder based on my "script". I'm gonna do another video soon which relies on having a few lessons available 😄

## A layout to enable dark mode

A common way to implement theming, is to have a data attribute or class in the `html` element, or the `body` element. So, something like `<html data-theme="dark">` or `<body class="dark">`.

However, you cannot use dynamic values like that in either of those elements while Server-Side Rendering in SvelteKit!

So, my workaround is to tweak my layout so I can have a "container div" that I can give the dynamic class to, and nest the rest of the app inside it.

So, my `layout.svelte` can look like:

```svelte
<div id="theme-container" class={$theme}>
	<div id="app-content">
		<Header />

		<main class="flex-grow flex flex-col items-center justify-center">
			<slot />
		</main>

		<Footer />
	</div>
</div>
```

Because of the extra nesting, I suggest removing the `target` option in `svelte.config.js`, which will make SvelteKit render the app straight inside the body element; which means you can remove the `<div id="svelte">` from our `app.html` file. So we're only at +1 levels of nesting for this to work 😄

With the layout above, we'll probably need to apply some... stretching rules to `#theme-container` & `#app-content`, but then we can have themeing in anything in our `#theme-container`, including `#app-content`!

For example, we could have css rules like:

```css
#app-content {
	color: var(--text-color);
	background-color: var(--background-color);
	@apply transition-colors;
}

/* css vars */
* {
	/* light */
	--text-color-light: hsl(24, 10%, 10%);
	--text-color-muted-light: hsl(30, 6%, 25%);
	--background-color-light: hsl(60, 9%, 98%);

	/* dark */
	--text-color-dark: hsl(356, 100%, 97%);
	--text-color-muted-dark: hsl(20, 6%, 90%);
	--background-color-dark: hsl(24, 10%, 10%);
}

:root {
	color-scheme: light;

	--text-color: var(--text-color-light);
	--text-color-muted: var(--text-color-muted-light);
	--background-color: var(--background-color-light);
}

.dark {
	color-scheme: dark;

	--text-color: var(--text-color-dark);
	--text-color-muted: var(--text-color-muted-dark);
	--background-color: var(--background-color-dark);
}
```

## Svelte stores and `getSession`

We're set on the layout and styles, but what's that `$theme` thing we're passing around? Why, it's the value of a Svelte store! A derived store to be exact, but first let's put that theme value in a store SvelteKit provides for us and _then_ we'll derive it!

So, SvelteKit has a few "hooks", that have nothing to do with React hooks, but a lot to do with handling requests, passing "stuff" around, including "stuff" from the server to the client. We will need that theme value to be known by the server and passed to the client, so we will implement the `getSession` hook, which puts whatever we return inside a session store!

To do that, let's create a `hooks/index.ts` that includes:

```ts
import type {GetSession} from '@sveltejs/kit'
import type {Writable} from 'svelte/store'

export type SessionData = {theme: 'light' | 'dark' | null}
export type SessionStore = Writable<SessionData>

export const getSession: GetSession<undefined, undefined, SessionData> = ({
	headers,
}) => {
	const theme = 'dark'
	return {theme}
}
```

So our session store, will now have a `theme` property which will always have the hard-coded value of `dark`.

We'll make it dynamic in a couple of steps, but let's first remove the level of indirection by creating a **derived** store for our theme, which will be taking that property from session for us!

## A derived `theme` store

With derived stores, you pass them the store or stores you want them to use as the source of truth, then you perform whichever computations you wish before returning a value.

In our case, it's just an object property access from the theme store, but we'll **also** be defaulting to user preference if there's no value set!

Let's create a `lib/stores/theme.ts`:

```ts
import {browser} from '$app/env'
import {session} from '$app/stores'
import type {SessionStore} from 'src/hooks'
import {derived} from 'svelte/store'

export enum Theme {
	Light = 'light',
	Dark = 'dark',
}

export const theme = derived<SessionStore, Theme>(session, ($session, set) => {
	if ($session.theme) {
		set($session.theme)
	} else if (browser) {
		set(
			window.matchMedia('(prefers-color-scheme: dark)').matches
				? Theme.Dark
				: Theme.Light
		)
	}
})
```

And now we can use the `theme` value in our layout like we've shown before: let's also do it in our `Header`, to show the appropriate icon a user can click to toggle the theme!

```svelte
<script>
	import DarkModeIcon from './DarkModeIcon.svelte'
	import LightModeIcon from './LightModeIcon.svelte'
	import {Theme, theme} from '$lib/stores/theme'
</script>

<header>
	<!-- [more code here...] -->
	<button>
		{#if $theme === Theme.Dark}
			<DarkModeIcon className="w-6" />
		{:else}
			<LightModeIcon className="w-6" />
		{/if}
	</button>
</header>
```

Great! But how do we enable our "click" to toggle functionality? Derived stores can't be written to, and it's a bit indirect again for this component to know that we actually need to update the session store.

So let's export a new method from our `lib/stores/theme.ts`:

```ts
export const setTheme = (theme: Theme) => {
	session.update(($session) => ({...$session, theme}))
}
```

And use it on our button in the Header!

```svelte
<script>
	import {setTheme, Theme, theme} from '$lib/stores/theme'

	const handleThemeIconClick = () => {
		const nextTheme = $theme === Theme.Dark ? Theme.Light : Theme.Dark
		setTheme(nextTheme)
	}
</script>

<button on:click={handleThemeIconClick}>
	{#if $theme === Theme.Dark}
		<DarkModeIcon className="w-6" />
	{:else}
		<LightModeIcon className="w-6" />
	{/if}
</button>
```

And now we can switch our theme client-side: Awesome! However, our toggle doesn't persist, which makes sense as we've hard-coded the initial value. So let's get back in our `getSession` hook and make it dynamic!

## Dynamic initial value from COOKIES

The most lightweight way to persist the "theme state" in a request that I can think of is COOKIES. Luckily, `getSession` gets given the `request` object, along with any `headers` it may have had, which may have included a cookie header! So let's read our initial value for the theme from there:

```ts
const getCookieValue = (cookie: string, name: string): string | null =>
	cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop() || null

export const getSession: GetSession<undefined, undefined, SessionData> = ({
	headers,
}) => {
	const theme = headers.cookie
		? (getCookieValue(headers.cookie, 'theme') as Theme)
		: null

	return {theme}
}
```

Alright, our initial theme value is now dynamic: in theory, in practice it's always `null` given nothing ever sets that cookie. Let's create a SvelteKit Endpoint that can do that!

## Setting a cookie with a PUT

The way you create Endpoints in SvelteKit, is by creating a corresponding typescript file in the `src/routes` directory, and export a handler with the appropriate name. Naming _is_ magic in this case!

A `PUT` request makes sense for what we wanna do, so let's export a `put` handler, that gives instructions to set a cookie with the theme value in found in the request body.

```ts
// src/routes/theme.ts
import type {RequestHandler} from '@sveltejs/kit'

// PUT /theme
export const put: RequestHandler = async ({body}) => {
	const theme = body.toString()

	return {
		headers: {
			'Set-Cookie': `theme=${theme}; SameSite=Strict; HttpOnly; Secure`,
		},
	}
}
```

## Last step: Hit that PUT endpoint!

Let's put all of this together by hitting that endpoint! Back in our `setTheme` all we need is to add a `fetch` for a request to the `PUT` endpoint we just created:

```ts
export const setTheme = (theme: Theme) => {
	session.update(($session) => ({...$session, theme}))
	fetch('/theme', {method: 'PUT', body: theme})
}
```

And now, every time we toggle the theme, we are setting that theme cookie... Which our `getSession` hook will read and therefore render our app in Dark Mode, if that was our preference!

Give it a go, and give yourself a pat on the back: we did it!

## [😄 Subscribe for more and to show support 😄](https://www.youtube.com/channel/UCm1ALyg61uhPoTnZBm7mY2g)
