<script context="module" lang="ts">
	import type {Load} from '@sveltejs/kit'

	export const load: Load = ({session}) => {
		if (session.user) return {redirect: '/profile', status: 302}

		return {status: 200}
	}
</script>

<script lang="ts">
	import BigButton from '$lib/components/buttons/BigButton.svelte'
	import PageHeading from '$lib/components/PageHeading.svelte'
	import {sendMagicLink} from '$lib/firebase/client'

	enum FormState {
		Idle,
		Submitting,
		Success,
		Error,
	}

	let state: FormState = FormState.Idle
	let email: string | null = null

	const handleSubmit: svelte.JSX.EventHandler<
		SubmitEvent,
		HTMLFormElement
	> = async ({currentTarget}) => {
		email = new FormData(currentTarget).get('email') as string
		const redirectUrl = new URL(`${window.location.origin}/auth/confirm`)

		state = FormState.Submitting

		await sendMagicLink(email, redirectUrl.toString()).catch(() => {
			state = FormState.Error
		})
		state = FormState.Success

		fetch('/auth/login', {
			method: 'POST',
			body: email,
		})
	}
</script>

<svelte:head>
	<title>Login | With Svelte</title>
</svelte:head>

<section class="container flex-grow px-2 text-2xl md:px-0">
	<PageHeading>Login</PageHeading>

	<div class="grid grid-cols-12 gap-6">
		{#if state !== FormState.Success}
			<div class="col-span-12 lg:col-span-5">
				<p>You are not logged in!</p>
				<p>
					Please enter your email to login, using the latest in <strong
						>Passwordless Authentication</strong
					> 🪄💌!
				</p>
			</div>
			<form
				class="col-span-12 mt-1 flex flex-col gap-6 lg:order-1 lg:col-span-7"
				on:submit|preventDefault={handleSubmit}
			>
				<input
					class="w-full rounded p-4 shadow"
					name="email"
					type="email"
					aria-label="email"
					placeholder="example@with-svelte.com"
					required
				/>
				<BigButton>send magic link</BigButton>
				{#if state === FormState.Submitting}
					<p>emailing {email}...</p>
				{/if}
				{#if state === FormState.Error}
					<p>
						Whoops, there was an error sending your email... Maybe try again 😬
					</p>
				{/if}
			</form>
		{:else}
			<div class="col-span-12">
				<p>Great, we’ve sent you an email!</p>
				<p>
					Please find it in your <strong>{email}</strong> inbox and follow the link
					there to login.
				</p>
			</div>
		{/if}
	</div>
</section>
