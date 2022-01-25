<script lang="ts">
	import Card from '$lib/components/Card.svelte'

	export let html: string
	export let title: string
	export let videoUrl: string
</script>

<article
	class="prose-code:font-light prose prose-slate w-full prose-headings:font-thin prose-a:decoration-primary-400 prose-code:font-code dark:prose-invert sm:prose-lg md:prose-xl lg:prose-2xl"
>
	<h1 class="text-4xl underline decoration-primary-400 decoration-wavy">
		{title}
	</h1>

	<Card>
		<div class="not-prose text-center">
			📷 <strong>Pro-tip</strong>: Watch the
			<a href={videoUrl}>video walkthrough</a>, come back for reference! 📷
		</div>
	</Card>

	<main>
		{@html html}
	</main>
</article>
