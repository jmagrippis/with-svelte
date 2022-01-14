<script lang="ts" context="module">
	import type {Load} from '@sveltejs/kit'

	const url = '/lessons.json'

	export const load: Load = async ({fetch}) => {
		const res = await fetch(url)

		if (res.ok) {
			const {lessons} = await res.json()
			return {
				props: {
					lessons,
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
	import PageHeading from '$lib/components/PageHeading.svelte'

	type Lesson = {
		attributes: {
			title: string
			date: string
			videoUrl: string
		}
		href: string
	}
	export let lessons: Lesson[]
</script>

<svelte:head>
	<title>Learn | With Svelte</title>
</svelte:head>

<section class="container px-2 md:px-0 flex-grow">
	<PageHeading>Latest lessons</PageHeading>

	<ul>
		{#each lessons as { attributes, href }}
			<li>
				<a
					class="text-2xl md:text-3xl font-thin px-6 py-4 bg-gradient-to-br hover:bg-gradient-to-tl from-prime to-primary-600 no-underline text-white rounded shadow dark:shadow-prime/20"
					sveltekit:prefetch
					{href}>{attributes.title}</a
				>
			</li>
		{/each}
	</ul>
</section>
