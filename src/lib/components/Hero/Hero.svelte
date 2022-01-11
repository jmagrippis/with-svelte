<script lang="ts">
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
		<p class="text-gray-700 dark:text-gray-200 mb-8">
			Turn your ideas into realities using the framework with <a
				href="https://2020.stateofjs.com/en-US/technologies/front-end-frameworks/"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="State of JS 2020 for frontend applications"
			>
				the highest developer satisfaction</a
			>!
		</p>
		<a
			href="/learn"
			sveltekit:prefetch
			class="text-2xl md:text-3xl font-thin px-6 py-4 bg-gradient-to-br hover:bg-gradient-to-tl from-prime to-primary-600 no-underline text-white rounded shadow dark:shadow-prime/20"
			>Start Learning!</a
		>
	</div>
	<aside class="md:col-span-4"><Build className="w-full" /></aside>
</section>
