import adapter from '@sveltejs/adapter-vercel'
import preprocess from 'svelte-preprocess'
import {plugin as md, Mode} from 'vite-plugin-markdown'
import hljs from 'highlight.js'
import hljs_svelte from 'highlightjs-svelte'

hljs_svelte(hljs)
const mdPlugin = md({
	mode: Mode.HTML,
	markdownIt: {
		typographer: true,
		highlight: function (str, lang) {
			if (lang && hljs.getLanguage(lang)) {
				try {
					return hljs.highlight(str, {language: lang}).value
				} catch {
					console.log(`error highlighting for ${lang}`)
				}
			}

			return '' // use external default escaping
		},
	},
})

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),

		vite: {
			plugins: [mdPlugin],
		},
	},
}

export default config
