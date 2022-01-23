<script lang="ts">
	import QuestionMarkIcon from './QuestionMarkIcon.svelte'

	export let className: string = undefined
</script>

<a href="/login" class={className}>
	<QuestionMarkIcon className="w-full" />
</a>
