/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs#typescript
// for information about these interfaces
declare namespace App {
	import type {DecodedIdToken} from 'firebase-admin/auth'
	import type {Theme, User} from './types'

	interface Locals {
		theme: Theme | null
		idToken: DecodedIdToken
	}

	interface Platform {}

	interface Session {
		theme: Theme | null
		user: User | null
	}

	interface Stuff {}
}

declare module '*.md' {
	export const attributes: {title: string; videoUrl: string; date: string}

	export const html: string
}
