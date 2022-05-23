import adapter from '@sveltejs/adapter-vercel'
import preprocess from 'svelte-preprocess'
import md from 'markdown-it'
import markdownItAnchor from 'markdown-it-anchor'
import {plugin as vitePluginMarkdown, Mode} from 'vite-plugin-markdown'
import hljs from 'highlight.js'
import hljs_svelte from 'highlightjs-svelte'

const markdownIt = md({
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
}).use(markdownItAnchor, {
	permalink: markdownItAnchor.permalink.headerLink({safariReaderFix: true}),
})

hljs_svelte(hljs)
const mdPlugin = vitePluginMarkdown({
	mode: Mode.HTML,
	markdownIt,
})

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter({edge: false}),

		methodOverride: {
			allowed: ['PUT', 'PATCH', 'DELETE'],
		},

		vite: {
			plugins: [mdPlugin],
			test: {
				mockReset: true,
				environment: 'jsdom',
				globals: true,
				setupFiles: 'src/setupTests.ts',
			},
		},
	},
}

export default config
