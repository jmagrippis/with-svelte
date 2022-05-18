<script>
	import PageHeading from '$lib/components/PageHeading.svelte'
</script>

<svelte:head>
	<title>About | With Svelte</title>
</svelte:head>

<section class="container flex-grow">
	<PageHeading>About</PageHeading>

	<p>
		We are learning
		<a href="https://svelte.dev" target="_blank" rel="noopener noreferrer">
			Svelte
		</a>
		&
		<a href="https://kit.svelte.dev" target="_blank" rel="noopener noreferrer">
			SvelteKit
		</a>
		as we’re building this, and so will you!
	</p>

	<p>
		We’ve got a hidden <a href="/tips">tips service</a>, where we livestreamed
		coding a fancy currency input! Hidden because its functionality is a work in
		progress, we’ll livestream more! Good job finding it here 😄
	</p>

	<p>
		Illustrations courtesy of <a
			href="https://undraw.co"
			target="_blank"
			rel="noopener noreferrer"
		>
			unDraw
		</a>
	</p>
</section>
