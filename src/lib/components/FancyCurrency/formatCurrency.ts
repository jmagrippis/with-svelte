const formatter = new Intl.NumberFormat('en-GB', {
	style: 'currency',
	currency: 'GBP',
	minimumFractionDigits: 2,
	maximumFractionDigits: 2,
})

export const formatCurrency = (value: number) => formatter.format(value)
