<script lang="ts">
	import {enhanceForm} from '$lib/actions/enhanceForm'
	import BigButton from '$lib/components/buttons/BigButton.svelte'
	import FancyCurrency from '$lib/components/FancyCurrency/FancyCurrency.svelte'
	import PageHeading from '$lib/components/PageHeading.svelte'
</script>

<svelte:head>
	<title>Tips | Give & take tips</title>
</svelte:head>

<section class="container flex-grow px-2 md:px-0">
	<PageHeading>Fancy Currency Input</PageHeading>

	<p>
		Welcome to the livestream! We’re building a fancy number input, using Svelte
		😄
	</p>

	<form
		class="max-w-prose overflow-hidden"
		method="POST"
		action="tips"
		use:enhanceForm
	>
		<FancyCurrency />
		<BigButton>ship it!</BigButton>
	</form>
</section>
