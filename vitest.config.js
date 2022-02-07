import {extractFromSvelteConfig} from 'vitest-svelte-kit'

export default extractFromSvelteConfig({
	kit: {
		vite: {
			test: {
				mockReset: true,
			},
		},
	},
})
