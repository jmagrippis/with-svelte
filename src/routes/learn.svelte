<script lang="ts">
	import PageHeading from '$lib/components/PageHeading.svelte'
	import BigLink from '$lib/components/buttons/BigLink.svelte'
	import type {GetAllLesson} from '$lib/repos/lessons'

	export let lessons: GetAllLesson[]
</script>

<svelte:head>
	<title>Learn | With Svelte</title>
</svelte:head>

<section class="container flex-grow px-2 md:px-0">
	<PageHeading>Latest lessons</PageHeading>

	<ul class="flex flex-col gap-2">
		{#each lessons as { attributes, href }}
			<li>
				<BigLink prefetch={true} {href}>{attributes.title}</BigLink>
			</li>
		{/each}
	</ul>
</section>
