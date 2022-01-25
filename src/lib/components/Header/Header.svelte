<script>
	import {setTheme, Theme, theme} from '$lib/stores/theme'
	import YouTubeIcon from '$lib/components/icons/YouTubeIcon.svelte'
	import ThemeToggleIcon from './ThemeToggleIcon.svelte'
	import Profile from './Profile/Profile.svelte'

	$: nextTheme = $theme === Theme.Dark ? Theme.Light : Theme.Dark
	const handleThemeIconClick = () => {
		setTheme(nextTheme)
	}
</script>

<header
	class="text-svelte-prime container flex items-center py-4 px-2 text-lg md:px-0"
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
			<ThemeToggleIcon className="w-6" />
		</button>
		<Profile />
		<a
			href="https://www.youtube.com/channel/UCm1ALyg61uhPoTnZBm7mY2g"
			target="_blank"
			rel="noopener noreferrer"
			aria-label="YouTube"
			class="transition-colors hover:text-prime"
		>
			<YouTubeIcon title="Johnny's YouTube channel" className="w-6" />
		</a>
	</div>
</header>
