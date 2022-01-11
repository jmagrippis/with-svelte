/// <reference types="@sveltejs/kit" />

declare module '*.md' {
	export const attributes: {title: string; videoUrl: string; date: string}

	export const html: string
}
