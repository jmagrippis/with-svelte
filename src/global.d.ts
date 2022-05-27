declare module '*.svg' {
	import type {SvelteComponentDev} from 'svelte'
	const content: SvelteComponentDev
	export default content
}

declare module '$lib/icons/*.svg' {
	import type {SvelteComponentDev} from 'svelte'
	const content: SvelteComponentDev
	export default content
}

declare module '*.svg?component' {
	import type {SvelteComponentDev} from 'svelte'
	const content: SvelteComponentDev
	export default content
}

declare module '*.svg?src' {
	const content: string
	export default content
}

declare module '*.svg?url' {
	const content: string
	export default content
}
