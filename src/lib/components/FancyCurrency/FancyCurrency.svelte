<script lang="ts">
	import {formatCurrency} from './formatCurrency'

	let value: null | string = null

	$: formattedValue = value ? formatCurrency(parseFloat(value)) : null
</script>

<label for="amount" class="relative mb-4">How much?</label>
<span
	class="relative mb-2 block text-4xl before:pointer-events-none before:absolute before:left-2 before:top-1 before:z-10 before:content-[attr(data-formatted-value)] focus:before:hidden"
	data-formatted-value={formattedValue}
	data-testid="formatted-value"
>
	<input
		id="amount"
		name="amount"
		class="focus:text relative rounded py-1 px-2 text-transparent shadow focus:z-20 focus:text-copy-base"
		placeholder="£5.00"
		type="number"
		pattern="\d*\.?\d*"
		bind:value
	/>
</span>

<style>
	input::outer-spin-button,
	input::-webkit-inner-spin-button {
		appearance: none;
	}
</style>
