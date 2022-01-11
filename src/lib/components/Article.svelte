<script lang="ts">
	import Card from '$lib/components/Card.svelte'

	export let html: string
	export let title: string
	export let videoUrl: string
</script>

<article
	class="w-full prose prose-a:decoration-primary-400 prose-code:font-code prose-code:font-light prose-slate sm:prose-lg md:prose-xl lg:prose-2xl dark:prose-invert prose-headings:font-thin"
>
	<h1 class="text-4xl underline decoration-primary-400 decoration-wavy">
		{title}
	</h1>

	<Card>
		<div class="not-prose text-center">
			📷 tl;dr? Watch the <a href={videoUrl}>video walkthrough</a>! 📷
		</div>
	</Card>

	<main>
		{@html html}
	</main>
</article>
