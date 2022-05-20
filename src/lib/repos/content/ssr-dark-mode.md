---
title: Server-Side Rendered Dark Mode with SvelteKit & Cookies
date: 2022-01-16T12:08:00.000Z
videoUrl: https://www.youtube.com/watch?v=5A21S5mMijI
---

Apps with dark mode are awesome, but have you ever been blinded by one not "remembering" your preference and flashing you the light theme before switching to dark?

Let’s dodge that problem and learn how to server-side render our SvelteKit app in dark mode! Spoiler alert: we’re gonna use cookies. But first... How's our Layout looking?

## A layout to enable dark mode

A common way to implement theming, is to have a data attribute or class in either the `html` or the `body` element, which signals which theme we're on. So if we inspect the source code of a page with a toggle-able "dark mode", we'd see something like `<html data-theme="dark">` or `<body class="dark">`.

However, we cannot use dynamic values like that in either of those elements while Server-Side Rendering in SvelteKit!

So, my workaround is to tweak my layout so I can have a "container div" to give the dynamic class value to, and nest the rest of the app inside it.

So, my `__layout.svelte` can look like:

```svelte
<div id="theme-container" class={$theme}>
	<div id="app-content">
		<Header />

		<main class="flex flex-grow flex-col items-center justify-center">
			<slot />
		</main>

		<Footer />
	</div>
</div>
```

Because of the extra nesting, I suggest removing the `target` option in `svelte.config.js`, which will make SvelteKit render the app straight inside the body element: which means we can remove the corresponding `<div id="svelte">` from our `app.html` file. We'll only be at +1 levels of nesting for this to work 😄

With the layout above, we'll probably need to apply some... stretching rules to `#theme-container` & `#app-content`. Not that important to the theming, but I do apply similar rules **to every single web app** I make, so I'll note them here:

```css
html {
	height: 100%;
	-webkit-font-smoothing: antialiased;
}

html,
body,
#theme-container,
#app-content {
	display: flex;
	flex-direction: column;
}

body,
#theme-container,
#app-content {
	flex-grow: 1;
}
```

What **is** important to the theming, is that we can now apply rules like this:

```css
#app-content {
	color: var(--text-color);
	background-color: var(--background-color);
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

**Or** like this for a more Tailwind flavour and no css vars:

```css
#app-content {
	@apply bg-gray-50 text-gray-900 transition-colors dark:bg-gray-900 dark:text-primary-50;
}
```

And both of them would work equally, thanks to the `dark` class being at least one level above where we're applying our "dark mode" overrides.

## Svelte stores and `getSession`

We're set on the layout and styles, but what's that `$theme` thing we're passing around? Why, it's the value of a Svelte store! A derived store we haven't written yet to be exact: first, we need to put that theme value in a store SvelteKit provides for us and **then** we can derive it!

SvelteKit offers a few "hooks" we can choose to implement: they have nothing to do with React hooks, but a lot to do with handling requests, passing "stuff" around, including "stuff" from the server to the client. We **will** need that theme value to be known by the server and passed to the client, so we will implement the `getSession` hook, which puts whatever we return inside a session store!

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

Since we return that object, our session store will now have a `theme` property which will always have the hard-coded value of `'dark'`.

We'll make it dynamic in a couple of steps, but let's first remove the level of indirection by creating a **derived** store for our theme, which will be accessing that property from the session for us!

## A derived `theme` store

With derived stores, we pass them the store or stores we want to use as the source of truth, then perform whichever computations we wish before returning a value.

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

And now we can use the `theme` value in our layout like in our very first code snippet at the start of the article. Let's do the same in our `Header`, to show the appropriate icon a user can click to toggle the theme!

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

Great! But how do we enable our "click-to-toggle" functionality? Derived stores cannot be written to, and it's a bit indirect again for this component to know that what we actually need to update is the session store.

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

And now we can switch our theme client-side: Awesome! However, our toggle doesn't persist, every time we reload the page or visit again, we start from that original value we've hard-coded.

So let's get back in our `getSession` hook and make it dynamic!

## Dynamic initial value from COOKIES

The most lightweight way to persist "state" in a request I can think of is COOKIES. Luckily, `getSession` gets given the `request` object, along with any `headers` it may have, which may included a cookie header!

A slight complication is that cookie header is a single string, containing **all** the cookies in the request, along with any other "settings" each may have, like their expiry and whether they should only be sent over https. There's no native Javascript helper method to "just" access the single cookie value we care about.

So let's use one I copy & pasted from the internet, and adapted to Typescript, to read the value of the `theme` cookie, if it exists:

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

Alright, our initial theme value is now dynamic!.. In theory, in practice it's always `null` given nothing ever sets that cookie. Let's create a SvelteKit Endpoint that can do just that!

## Setting a cookie with a PUT Endpoint

The way you create Endpoints in SvelteKit, is by creating a corresponding typescript file in the `src/routes` directory, and export a handler with the appropriate name. Naming **is** magic in this case!

A `PUT` request makes sense for what we wanna do, so let's export a `put` handler, which will give instructions to set a cookie with the theme value it received in the request body.

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

Let's put all of this together by hitting that endpoint! All we need one extra line back in our `setTheme` method: a `fetch` for a request to the `PUT` endpoint we just created:

```ts
export const setTheme = (theme: Theme) => {
	session.update(($session) => ({...$session, theme}))
	fetch('/theme', {method: 'PUT', body: theme})
}
```

And now, every time we toggle the theme, we are setting that theme cookie... Which our `getSession` hook will read and use as the initial value for our session.theme, which will therefore render our app in Dark Mode to begin with... if that was our preference!

Give it a go by clicking the icon yourself and reloading the page, then give yourself a pat on the back: we did it!

## [😄 Subscribe for more and to show support 😄](https://www.youtube.com/channel/UCm1ALyg61uhPoTnZBm7mY2g)
