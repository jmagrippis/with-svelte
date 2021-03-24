const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.svelte'],
  darkMode: false,
  theme: {
    container: {
      center: true,
    },
    colors: {
      white: colors.white,
      gray: colors.trueGray,
      rose: colors.rose,
      'svelte-prime': '#ff3e00',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
