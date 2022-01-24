<script lang="ts">
	import QuestionMarkIcon from './QuestionMarkIcon.svelte'
	import {user} from '$lib/stores/user'
</script>

{#if $user}
	<a
		href="/profile"
		class="border-2 border-dashed rounded-full text-center hover:text-primary-600 hover:border-prime transition-colors w-7 h-7 text-sm no-underline font-thin flex justify-center items-center"
	>
		{$user.email[0].toUpperCase()}
	</a>
{:else}
	<a href="/login" class="hover:text-prime transition-colors w-6">
		<QuestionMarkIcon className="w-full" />
	</a>
{/if}
