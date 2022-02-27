<script lang="ts" context="module">
	import type {Load} from '@sveltejs/kit'

	export const load: Load = ({session}) =>
		session.user ? {status: 200} : {redirect: '/login', status: 302}
</script>

<script lang="ts">
	import {goto} from '$app/navigation'

	import {enhanceForm} from '$lib/actions/enhanceForm'
	import PageHeading from '$lib/components/PageHeading.svelte'
	import {setUser} from '$lib/stores/user'

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
		We’ll be adding the ability to view <strong>your favourite lessons</strong> here!
	</p>

	<p>What other functionality would you like to see? Get in touch 😄</p>

	<form
		method="POST"
		action="auth/session?_method=DELETE"
		use:enhanceForm={{result: handleLogout}}
	>
		<button class="underline decoration-primary-600">logout</button>
	</form>
</section>
