<script lang="ts">
	import Article from '$lib/components/Article.svelte'
	import type {Lesson} from '$lib/repos/lessons'

	export let lesson: Lesson

	const {
		html,
		attributes: {title, videoUrl},
	} = lesson
</script>

<svelte:head>
	<title>{title} | With Svelte</title>
	<link
		rel="stylesheet"
		href="https://unpkg.com/@highlightjs/cdn-assets@11.3.1/styles/github-dark-dimmed.min.css"
	/>
</svelte:head>

<Article {html} {title} {videoUrl} />
