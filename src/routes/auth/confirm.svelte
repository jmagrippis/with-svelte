<script context="module" lang="ts">
	import {isMagicCallbackLink, signInWithMagicLink} from '$lib/firebase/client'

	import type {Load} from '@sveltejs/kit'

	export const load: Load = async ({url}) => {
		const isIt = isMagicCallbackLink(url.href)
		try {
			const token = await signInWithMagicLink('j@magrippis.com', url.href)

			return {
				props: {isIt, token},
			}
		} catch (error) {
			return {
				props: {isIt, error},
			}
		}
	}
</script>

<script lang="ts">
	export let isIt: string
	export let token: string
	export let error: string
</script>

<div>{isIt} lookin' good!</div>
<div>{token}</div>
<div>{error}</div>
