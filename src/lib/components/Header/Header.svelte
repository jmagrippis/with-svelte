<script lang="ts">
	import type {Theme} from '../../../types'
	import {setTheme, theme} from '$lib/stores/theme'
	import YouTubeIcon from '$lib/icons/youtube.svg'
	import ThemeToggleIcon from './ThemeToggleIcon.svelte'
	import Profile from './Profile/Profile.svelte'

	let previousY: number
	let currentY: number
	let clientHeight: number

	const deriveDirection = (y: number) => {
		const direction = !previousY || previousY < y ? 'down' : 'up'
		previousY = y

		return direction
	}

	$: scrollDirection = deriveDirection(currentY)
	$: offscreen = scrollDirection === 'down' && currentY > clientHeight * 4

	$: nextTheme = ($theme === 'dark' ? 'light' : 'dark') as Theme
	const handleThemeIconClick = () => {
		setTheme(nextTheme)
	}
</script>

<svelte:window bind:scrollY={currentY} />

<header
	class="container sticky top-0 flex h-[var(--header-height)] items-center bg-surface-1/50 px-2 text-lg backdrop-blur-sm transition-transform ease-in md:px-0"
	class:motion-safe:-translate-y-full={offscreen}
	bind:clientHeight
>
	<nav class="flex flex-grow">
		<a href="/" class="mr-4 text-2xl font-thin md:mr-8">With Svelte</a>
		<ul class="mr-4 flex flex-grow items-center gap-4 md:gap-8">
			<li>
				<a href="/learn">Learn</a>
			</li>
			<li>
				<a href="/about">About</a>
			</li>
		</ul>
	</nav>
	<div class="flex items-center gap-4 md:gap-8">
		<button
			on:click={handleThemeIconClick}
			class="transition-colors hover:text-prime"
			label="toggle theme from {$theme} to {nextTheme}"
			aria-live="polite"
		>
			<ThemeToggleIcon class="w-6" />
		</button>
		<Profile />
		<a
			href="https://www.youtube.com/channel/UCm1ALyg61uhPoTnZBm7mY2g"
			target="_blank"
			rel="noopener noreferrer"
			aria-label="YouTube"
			class="transition-colors hover:text-prime"
		>
			<YouTubeIcon title="Johnny's YouTube channel" class="w-6" />
		</a>
	</div>
</header>
