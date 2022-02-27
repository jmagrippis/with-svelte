<script lang="ts">
	import {user} from '$lib/stores/user'
	import QuestionMarkIcon from './QuestionMarkIcon.svelte'
</script>

{#if $user}
	<a
		href="/profile"
		class="flex h-7 w-7 text-sm items-center justify-center border-2 border-dashed rounded-full font-thin no-underline transition-colors hover:border-prime hover:text-primary-600"
	>
		{$user.email[0].toUpperCase()}
	</a>
{:else}
	<a href="/login" class="hover:text-prime transition-colors w-6">
		<QuestionMarkIcon className="w-full" />
	</a>
{/if}
