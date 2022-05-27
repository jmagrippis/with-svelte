<script lang="ts">
	import {user} from '$lib/stores/user'
	import QuestionMarkIcon from '$lib/icons/question-mark.svg'
</script>

{#if $user}
	<a
		href="/profile"
		class="flex h-7 w-7 items-center justify-center rounded-full border-2 border-dashed text-sm font-thin no-underline transition-colors hover:border-prime hover:text-primary-600"
	>
		{$user.email[0].toUpperCase()}
	</a>
{:else}
	<a href="/login" class="w-6 transition-colors hover:text-prime">
		<QuestionMarkIcon class="w-full" />
	</a>
{/if}
