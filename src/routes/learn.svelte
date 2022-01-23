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
	import BigLink from '$lib/components/buttons/BigLink.svelte'

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

	<ul class="flex flex-col gap-2">
		{#each lessons as { attributes, href }}
			<li>
				<BigLink prefetch={true} {href}>{attributes.title}</BigLink>
			</li>
		{/each}
	</ul>
</section>
