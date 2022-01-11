const colors = require('tailwindcss/colors')

const withOpacityValue =
	(varName) =>
	({opacityValue}) =>
		opacityValue === undefined
			? `hsl(var(--${varName}))`
			: `hsla(var(--${varName}) / ${opacityValue})`

module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,css,svelte}'],
	theme: {
		colors: {
			primary: colors.rose,
			secondary: colors.emerald,
			prime: withOpacityValue('prime-color'),
			gray: colors.stone,
			white: colors.white,
			transparent: 'transparent',
			current: 'currentColor',
		},
		fontFamily: {
			sans: ['Overpass', 'sans-serif'],
			code: ['Fira Code', 'monospace'],
		},
		fontWeight: {
			thin: 100,
			normal: 400,
		},
		container: {
			center: true,
		},
		extend: {},
	},
	plugins: [require('@tailwindcss/typography')],
}
