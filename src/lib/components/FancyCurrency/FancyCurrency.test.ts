import {render} from '@testing-library/svelte'

import FancyCurrency from './FancyCurrency.svelte'

it('allows the user to type into it', () => {
	render(FancyCurrency)
})
