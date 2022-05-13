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
	<PageHeading>Tips service</PageHeading>

	<section>
		<p>Leave a monetary tip, get an array of joke-y, life-advice, tips back!</p>

		<p>
			To be clear, this is a page to showcase a fancy, formatted currency input.
			The tips you’ll get back <strong>will not have any instrisic value</strong
			>. They will be randomised, but not be unique.
		</p>

		<p>
			Besides we haven’t done the Stripe / payment integration yet, or worked
			out the tipping service, stay tuned for future episodes 😄
		</p>

		<p>That said...</p>
	</section>
	<form class="m-auto max-w-prose" method="POST" action="tips" use:enhanceForm>
		<FancyCurrency />
		<BigButton>tip me!</BigButton>
	</form>
</section>
