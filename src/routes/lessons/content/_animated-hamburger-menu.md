---
title: Animated 🍔 Menu with SVG & CSS
date: 2021-11-14T12:10:00.000Z
videoUrl: https://www.youtube.com/watch?v=fWzKPUUQdQY
---

Hamburger Menus: If you gotta do them, do them in style!

**Note:** I did put a lot of effort into the video, but this lesson is more of a placeholder based on the "script". I'm gonna do another video soon which relies on having a few lessons available 😄

I may come back to revise this with proper instructions, until then please do watch the video, it should clear things up 🙂

## An SVG made to be animated

The "trick" to this animation, is having the SVG be designed so each line is much "longer" than it needs to be, then "hiding" some of it using the `stroke-dasharray` and `stroke-dashoffset` properties.

Its those properties that we're gonna animate to achieve the effect!

The SVG itself looks like this:

```svelte
<svg
	class:open
	viewBox="0 0 100 100"
	fill="none"
	stroke="currentColor"
	stroke-width="5"
	{width}
>
	<path
		class="top"
		d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
	/>
	<path class="middle" d="m 30,50 h 40" />
	<path
		class="bottom"
		d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
	/>
</svg>
```

Allowing for a dynamic `width` to come as a Svelte Component prop.

## The CSS

As mentioned, it's the `stroke-dasharray` and `stroke-dashoffset` properties we're gonna animate: we know the "coordinates" we need to give to make them look like a line or a half line, so all we need to do is apply them "conditionally", when the `open` class is applied.

We'll also be twisting for good measure!

```css
.top {
	stroke-dasharray: 40 160;
	transition: stroke-dashoffset var(--transition-duration);
}
.middle {
	transform-origin: 50%;
	transition: transform var(--transition-duration);
}
.bottom {
	stroke-dasharray: 40 85;
	transition: stroke-dashoffset var(--transition-duration);
}
.open {
	transform: rotate(45deg);
}
.open .top,
.open .bottom {
	stroke-dashoffset: -64px;
}
.open .middle {
	transform: rotate(90deg);
}
```

## Putting it together as a Svelte Component

The Svelte Component version of this will have some additional Javascript, for it to allow the menu to be "uncontrolled", so to be able to open and close by itself, but also to be given the props in needs in order for it to be "controlled".

It looks like:

```svelte
<script lang="ts">
	export let open = false
	export let onClick = () => {
		open = !open
	}

	export let ariaLabel = 'toggle menu'
	export let width: string | number = 80
</script>

<button on:click={onClick} aria-expanded={open} aria-label={ariaLabel}>
	<svg
		class:open
		viewBox="0 0 100 100"
		fill="none"
		stroke="currentColor"
		stroke-width="5"
		{width}
	>
		<path
			class="top"
			d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
		/>
		<path class="middle" d="m 30,50 h 40" />
		<path
			class="bottom"
			d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
		/>
	</svg>
</button>

<style>
	:root {
		--transition-duration: 400ms;
	}

	button {
		cursor: pointer;
		display: flex;
		align-items: center;
		overflow: hidden;
	}

	svg {
		transition: transform var(--transition-duration);
	}

	.top {
		stroke-dasharray: 40 160;
		transition: stroke-dashoffset var(--transition-duration);
	}

	.middle {
		transform-origin: 50%;
		transition: transform var(--transition-duration);
	}

	.bottom {
		stroke-dasharray: 40 85;
		transition: stroke-dashoffset var(--transition-duration);
	}

	.open {
		transform: rotate(45deg);
	}

	.open .top,
	.open .bottom {
		stroke-dashoffset: -64px;
	}

	.open .middle {
		transform: rotate(90deg);
	}
</style>
```

Render it somewhere in your app and check out how cool it looks!

## Using our AnimatedHamburger in a header

Here's an example of using it in a controlled way, in a an actual Header for an app:

```svelte
<script lang="ts">
	import {fly} from 'svelte/transition'

	import AnimatedHamburger from '$lib/AnimatedHamburger.svelte'
	import logo from './svelte-logo.svg'

	export let open = false
	export let onClick = () => {
		open = !open
	}
</script>

<header>
	<div class="main">
		<div class="logo">
			<a href="https://kit.svelte.dev">
				<img src={logo} alt="SvelteKit" />
			</a>
		</div>
		<AnimatedHamburger {open} {onClick} />
	</div>

	{#if open}
		<nav transition:fly={{y: -200, duration: 400}}>
			<a href="https://magrippis.com/tube">Videos</a>
			<a href="https://magrippis.com/blog">Blogposts</a>
			<a href="https://magrippis.com/tube">Guides</a>
			<a href="https://magrippis.com/tube">Portfolio</a>
			<a href="https://magrippis.com/milestones">Milestones</a>
		</nav>
	{/if}
</header>

<style>
	header {
		position: relative;
		font-size: 2rem;
		color: var(--accent-color);
		background-color: var(--white);
		z-index: 2;
	}

	.main {
		display: flex;
		justify-content: space-between;
	}

	.logo {
		width: 3em;
		height: 3em;
	}

	.logo a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.logo img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

	nav {
		position: absolute;
		z-index: -1;
		width: 100%;
		padding: 1rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		align-items: center;
		background-color: var(--white);
	}
</style>
```

Again, make sure to checkout out the video for a more thorough explanation, or [visit the deployed app to click around yourself](https://svelte-hamburger.vercel.app/)!

## [😄 Subscribe for more and to show support 😄](https://www.youtube.com/channel/UCm1ALyg61uhPoTnZBm7mY2g)
