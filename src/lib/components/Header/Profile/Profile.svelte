<script lang="ts">
	import QuestionMarkIcon from './QuestionMarkIcon.svelte'
	import {user} from '$lib/stores/user'
</script>

{#if $user}
	<a
		href="/profile"
		class="flex h-7 w-7 items-center justify-center rounded-full border-2 border-dashed text-center text-sm font-thin no-underline transition-colors hover:border-prime hover:text-primary-600"
	>
		{$user.email[0].toUpperCase()}
	</a>
{:else}
	<a href="/login" class="hover:text-prime transition-colors w-6">
		<QuestionMarkIcon className="w-full" />
	</a>
{/if}
