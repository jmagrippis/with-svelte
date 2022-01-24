<script context="module" lang="ts">
	import type {Load} from '@sveltejs/kit'

	export const load: Load = async ({session}) => {
		if (!session.user) return {redirect: '/login', status: 302}

		return {status: 200}
	}
</script>

<script>
	import PageHeading from '$lib/components/PageHeading.svelte'
	import {enhanceForm} from '$lib/actions/enhanceForm'
	import {setUser} from '$lib/stores/user'
	import {goto} from '$app/navigation'

	const handleLogout = () => {
		setUser(null)
		goto('/')
	}
</script>

<svelte:head>
	<title>My Profile | With Svelte</title>
</svelte:head>

<section class="container flex-grow">
	<PageHeading>Profile</PageHeading>

	<p>Hey, thanks for creating an account With Svelte!</p>

	<p>
		We’ll be adding the ability to view <strong>your liked lessons</strong> here!
	</p>

	<p>What other functionality would you like to see? Get in touch 😄</p>
	<form
		action="auth/session?_method=DELETE"
		method="post"
		use:enhanceForm={{result: handleLogout}}
	>
		<button class="underline decoration-primary-600">logout</button>
	</form>
</section>
