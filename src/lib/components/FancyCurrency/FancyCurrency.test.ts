import {render} from '@testing-library/svelte'
import userEvent from '@testing-library/user-event'

import FancyCurrency from './FancyCurrency.svelte'

it('allows the user to type into it', async () => {
	const user = userEvent.setup()
	const {getByLabelText, getByDisplayValue, getByPlaceholderText, getByTestId} =
		render(FancyCurrency)

	expect(getByPlaceholderText('£5.00')).toBeInTheDocument()
	const $input = getByLabelText('How much?')
	expect($input).toBeInTheDocument()

	await user.type($input, '1337')

	const $updatedInput = getByDisplayValue('1337')
	expect($updatedInput).toBeInTheDocument()

	const $formattedValue = getByTestId('formatted-value')

	expect($formattedValue).toHaveAttribute('data-formatted-value', '£1,337.00')

	await user.clear($updatedInput)

	await user.type($updatedInput, '13.37')

	const $updatedInputB = getByDisplayValue('13.37')
	expect($updatedInputB).toBeInTheDocument()

	const $updatedFormattedValue = getByTestId('formatted-value')

	expect($updatedFormattedValue).toHaveAttribute(
		'data-formatted-value',
		'£13.37'
	)
})

it('does not allow the user to type in characters', async () => {
	const user = userEvent.setup()
	const {getByLabelText, getByDisplayValue} = render(FancyCurrency)

	const $input = getByLabelText('How much?')
	expect($input).toBeInTheDocument()

	await user.type($input, '42w1`')

	const $updatedInput = getByDisplayValue('421')
})
