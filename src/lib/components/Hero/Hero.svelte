<script lang="ts">
	import BigLink from '../buttons/BigLink.svelte'
	import Build from './Build.svelte'
</script>

<section
	class="container py-4 px-2 md:px-0 md:grid md:grid-cols-7 md:gap-x-8 lg:gap-x-16"
>
	<div
		class="mb-8 md:mb-0 text-xl md:text-2xl md:col-span-3 text-center md:text-left md:self-center"
	>
		<div class="text-5xl lg:text-6xl mb-2">
			<div>Build apps</div>
			<div class="text-prime font-thin">With Svelte</div>
		</div>
		<p class="text-copy-muted mb-8">
			Turn your ideas into realities using the framework with <a
				href="https://2020.stateofjs.com/en-US/technologies/front-end-frameworks/"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="State of JS 2020 for frontend applications"
			>
				the highest developer satisfaction</a
			>!
		</p>
		<BigLink href="/learn" prefetch={true}>Start Learning!</BigLink>
	</div>
	<aside class="md:col-span-4"><Build className="w-full" /></aside>
</section>
