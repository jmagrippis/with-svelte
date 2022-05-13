import {render} from '@testing-library/svelte'
import userEvent from '@testing-library/user-event'

import FancyCurrency from './FancyCurrency.svelte'

it('allows the user to type into it', async () => {
	const user = userEvent.setup()
	const {getByLabelText, getByDisplayValue, getByPlaceholderText, getByTestId} =
		render(FancyCurrency)

	expect(getByPlaceholderText('£5.00')).toBeInTheDocument()
	const $input = getByLabelText(/how much/i)
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

	const $input = getByLabelText(/how much/i)
	expect($input).toBeInTheDocument()

	await user.type($input, '42w1`')

	expect(getByDisplayValue('421')).toBeInTheDocument()
})

it('has a set of specified amounts to pre-fill', async () => {
	const user = userEvent.setup()
	const {getByText, getByDisplayValue} = render(FancyCurrency)

	await user.click(getByText(/more than enough/i))
	expect(getByDisplayValue('5')).toBeInTheDocument()

	await user.click(getByText(/already too much/i))
	expect(getByDisplayValue('100')).toBeInTheDocument()

	await user.click(getByText(/Supreme Superfan/i))
	expect(getByDisplayValue('1337')).toBeInTheDocument()
})
