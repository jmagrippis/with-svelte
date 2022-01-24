<script context="module" lang="ts">
	import type {Load} from '@sveltejs/kit'

	export const load: Load = async ({session}) => {
		const email = session.magicEmail

		return {
			props: {email},
		}
	}
</script>

<script lang="ts">
	import {isMagicLink, signInWithMagicLink} from '$lib/firebase/client'
	import {onMount} from 'svelte'
	import {goto} from '$app/navigation'
	import {setUser} from '$lib/stores/user'
	import BigButton from '$lib/components/buttons/BigButton.svelte'
	import PageHeading from '$lib/components/PageHeading.svelte'

	export let email: string
	let error: string | null = null

	const handleSubmit: svelte.JSX.EventHandler<
		SubmitEvent,
		HTMLFormElement
	> = async ({currentTarget}) => {
		email = new FormData(currentTarget).get('email') as string
		login()
	}

	const login = async () => {
		const credential = await signInWithMagicLink(email, window.location.href)
		const token = await credential.user.getIdToken()
		const user = await fetch('/auth/session', {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}).then((res) => res.json())

		setUser(user)

		goto('/')
	}

	onMount(async () => {
		const isMagic = isMagicLink(window.location.href)
		if (!isMagic) {
			error = 'Invalid magic link: How did you get here?!'
			return
		}
		if (email) {
			login()
		}
	})
</script>

<svelte:head>
	<title>Confirm Login | With Svelte</title>
</svelte:head>

<section class="container px-2 md:px-0 flex-grow text-2xl">
	{#if error}
		<p>{error}</p>
	{:else if email}
		<p>We are signing you in with {email}...</p>
	{:else}
		<PageHeading>Confirm your email to login</PageHeading>
		<div class="grid grid-cols-12 gap-4">
			<div class="col-span-12 lg:col-span-5">
				<p class="mb-2">
					We know you just clicked a magic link, but maybe you’re logging in
					from a different device to where you requested the login?
				</p>
				<p class="mb-4">
					In any case, please fill in your email address and submit the form!
				</p>
			</div>
			<form
				class="col-span-12 lg:col-span-7 flex flex-col mt-1 gap-6"
				on:submit|preventDefault={handleSubmit}
			>
				<input
					class="w-full shadow p-4 rounded"
					name="email"
					type="email"
					aria-label="email"
					placeholder="example@with-svelte.com"
					required
				/>
				<BigButton>finish login!</BigButton>
			</form>
		</div>
	{/if}
</section>
