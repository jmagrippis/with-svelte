import {formatCurrency} from './formatCurrency'

it('adds the £ before the given number', () => {
	const resultA = formatCurrency(1)

	expect(resultA).toContain('£1')

	const resultB = formatCurrency(42)

	expect(resultB).toContain('£42')
})

it('adds commas every three digits', () => {
	const resultA = formatCurrency(1_234)

	expect(resultA).toContain('1,234')

	const resultB = formatCurrency(9_876_543)

	expect(resultB).toContain('9,876,543')
})

it('always ends with two decimal points', () => {
	const resultA = formatCurrency(9.87)

	expect(resultA).toContain('9.87')

	const resultB = formatCurrency(10)

	expect(resultB).toContain('10.00')
})
