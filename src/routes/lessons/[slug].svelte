<script lang="ts" context="module">
	import type {Load} from '@sveltejs/kit'

	export const load: Load = async ({params, fetch}) => {
		const slug = params.slug ?? 'sveltekit-to-vercel'
		const url = `/lessons/${slug}.json`
		const res = await fetch(url)

		if (res.ok) {
			const {
				html,
				attributes: {title, videoUrl},
			} = await res.json()
			return {
				props: {
					html,
					title,
					videoUrl,
				},
			}
		}

		return {
			status: res.status,
			error: new Error(`Could not load ${url}`),
		}
	}
</script>

<script lang="ts">
	import Article from '$lib/components/Article.svelte'

	export let html: string
	export let title: string
	export let videoUrl: string
</script>

<svelte:head>
	<title>{title} | With Svelte</title>
	<link
		rel="stylesheet"
		href="https://unpkg.com/@highlightjs/cdn-assets@11.3.1/styles/github-dark-dimmed.min.css"
	/>
</svelte:head>

<Article {html} {title} {videoUrl} />
