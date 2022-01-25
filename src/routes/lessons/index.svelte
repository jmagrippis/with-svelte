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
	import Card from '$lib/components/Card.svelte'

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
	<title>{lessons.length} lessons just for you!</title>
</svelte:head>

<main>
	<h1 class="mb-8 text-4xl underline decoration-primary-400 decoration-wavy">
		Lessons
	</h1>

	<ul>
		{#each lessons as { attributes, href }}
			<li>
				<Card>
					<a sveltekit:prefetch {href}>{attributes.title}</a>
				</Card>
			</li>
		{/each}
	</ul>
</main>
