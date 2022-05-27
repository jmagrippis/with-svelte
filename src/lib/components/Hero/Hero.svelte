<script lang="ts">
	import BigLink from '../buttons/BigLink.svelte'
	import HeroIcon from '$lib/icons/hero.svg'
</script>

<section
	class="container py-4 px-2 md:grid md:grid-cols-12 md:gap-x-8 md:px-0 lg:gap-x-16"
>
	<div
		class="mb-8 text-center text-xl md:col-span-5 md:mb-0 md:self-center md:text-left md:text-2xl"
	>
		<div class="mb-2 text-5xl lg:text-6xl">
			<div>Build apps</div>
			<div class="font-thin text-prime">With Svelte</div>
		</div>
		<p class="mb-6 text-copy-muted">
			Turn your ideas into realities using the framework with <a
				href="https://2020.stateofjs.com/en-US/technologies/front-end-frameworks/"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="State of JS 2020 for frontend applications"
			>
				the highest developer satisfaction</a
			>!
		</p>
		<p class="text-center">
			<BigLink href="/learn" prefetch={true}>Start Learning!</BigLink>
		</p>
	</div>
	<aside class="md:col-span-7"><HeroIcon class="w-full" /></aside>
</section>
