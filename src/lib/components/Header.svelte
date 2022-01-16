<script>
	import GithubMark from './GithubMark.svelte'
	import YouTubeIcon from './YouTubeIcon.svelte'
	import DarkModeIcon from './DarkModeIcon.svelte'
	import LightModeIcon from './LightModeIcon.svelte'
	import {setTheme, Theme, theme} from './stores/theme'

	const handleThemeIconClick = () => {
		const nextTheme = $theme === Theme.Dark ? Theme.Light : Theme.Dark
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
		<button on:click={handleThemeIconClick}>
			{#if $theme === Theme.Dark}
				<DarkModeIcon className="w-6" />
			{:else}
				<LightModeIcon className="w-6" />
			{/if}
		</button>
		<a
			href="https://www.youtube.com/channel/UCm1ALyg61uhPoTnZBm7mY2g"
			target="_blank"
			rel="noopener noreferrer"
			aria-label="YouTube"
		>
			<YouTubeIcon title="Johnny's YouTube channel" className="w-6" />
		</a>
		<a
			href="https://github.com/jmagrippis/with-svelte"
			target="_blank"
			rel="noopener noreferrer"
			aria-label="github repo"
		>
			<GithubMark className="w-6" />
		</a>
	</div>
</header>
