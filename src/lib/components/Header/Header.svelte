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
	class="container py-4 px-2 md:px-0 flex items-center text-lg text-svelte-prime"
>
	<nav class="flex flex-grow">
		<a href="/" class="text-2xl font-thin mr-4 md:mr-8">With Svelte</a>
		<ul class="flex gap-4 md:gap-8 items-center flex-grow mr-4">
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
			class="hover:text-prime transition-colors"
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
			class="hover:text-prime transition-colors"
		>
			<YouTubeIcon title="Johnny's YouTube channel" className="w-6" />
		</a>
	</div>
</header>
