import {sveltekit} from '@sveltejs/kit/vite'
import md from 'markdown-it'
import markdownItAnchor from 'markdown-it-anchor'
import {plugin as vitePluginMarkdown, Mode} from 'vite-plugin-markdown'
import hljs from 'highlight.js'
import hljs_svelte from 'highlightjs-svelte'
import svg from '@poppanator/sveltekit-svg'

const svgPlugin = svg({
	svgoOptions: {
		plugins: [
			{
				name: 'preset-default',
				params: {
					overrides: {
						removeViewBox: false,
					},
				},
			},
			'removeDimensions',
		],
	},
})

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

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit(), svgPlugin, mdPlugin],
	test: {
		mockReset: true,
		environment: 'jsdom',
		globals: true,
		setupFiles: 'src/setupTests.ts',
	},
}

export default config
