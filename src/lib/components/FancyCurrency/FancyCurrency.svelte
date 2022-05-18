<script lang="ts">
	import {formatCurrency} from './formatCurrency'

	let value: null | string = null

	const suggestedAmounts: {label: string; amount: number}[] = [
		{label: '✅ More than enough ✅', amount: 5},
		{label: '🙈 Already too much 🙈', amount: 100},
		{label: '💸 Supreme Superfan 💸', amount: 1337},
	]

	$: formattedValue = value ? formatCurrency(parseFloat(value)) : null
</script>

<label
	class="relative mb-4 block text-4xl before:pointer-events-none before:absolute before:left-2 before:top-11 before:z-10 before:content-[attr(data-formatted-value)] focus:before:hidden"
	data-formatted-value={formattedValue}
	data-testid="formatted-value"
>
	<span class="block h-10 select-none text-2xl text-copy-muted"
		>How much you wanna tip?</span
	>
	<input
		name="amount"
		class="focus:text relative w-full rounded py-1 px-2 text-transparent shadow focus:z-20 focus:text-copy-base"
		placeholder="£5.00"
		type="number"
		pattern="\d*\.?\d*"
		bind:value
	/>
</label>

<div class="mb-4 text-xl">
	Suggested amounts

	{#each suggestedAmounts as { label, amount }}
		<button
			class="block underline decoration-prime"
			on:click={() => {
				value = `${amount}`
			}}>{label} {formatCurrency(amount)}</button
		>
	{/each}
</div>

<style>
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		appearance: none;
	}
</style>
