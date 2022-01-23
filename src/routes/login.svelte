<script lang="ts">
	import {enhanceForm} from '$lib/actions/enhanceForm'
	import BigButton from '$lib/components/buttons/BigButton.svelte'
	import PageHeading from '$lib/components/PageHeading.svelte'

	enum FormState {
		Idle,
		Submitting,
		Success,
		Error,
	}

	let state: FormState = FormState.Idle
	let mailTo: string | null = null
</script>

<svelte:head>
	<title>Login | With Svelte</title>
</svelte:head>

<section class="container px-2 md:px-0 flex-grow">
	<PageHeading>Login</PageHeading>

	<div class="text-2xl flex flex-col gap-4">
		{#if state !== FormState.Success}
			<p>You are not logged in!</p>
			<p>
				Please enter your email to login, using the latest in <strong
					>Passwordless Authentication</strong
				> 🪄💌!
			</p>
			<form
				class="flex flex-col mt-1 gap-6"
				action="/auth/login"
				method="post"
				use:enhanceForm={{
					pending(data) {
						state = FormState.Submitting
						mailTo = data.get('email').toString()
					},
					result() {
						state = FormState.Success
					},
					error() {
						state = FormState.Error
					},
				}}
			>
				<input
					class="w-full shadow p-4 rounded"
					name="email"
					type="email"
					aria-label="email"
					placeholder="example@with-svelte.com"
					required
				/>
				<BigButton>send magic link</BigButton>
				{#if state === FormState.Submitting}
					<p>emailing {mailTo}...</p>
				{/if}
				{#if state === FormState.Error}
					<p>
						Whoops, there was an error sending your email... Maybe try again 😬
					</p>
				{/if}
			</form>
		{:else}
			<p>Great, we’ve sent you an email!</p>
			<p>
				Please find it in your <strong>{mailTo}</strong> inbox and follow the link
				there to login.
			</p>
		{/if}
	</div>
</section>
