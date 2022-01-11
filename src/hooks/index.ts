import type {GetSession} from '@sveltejs/kit'
import type {Writable} from 'svelte/store'

import {getThemeFromCookie} from '$lib/getThemeFromCookie'
import type {Theme} from '$lib/stores/theme'

export type SessionData = {theme: Theme | null}
export type SessionStore = Writable<SessionData>

export const getSession: GetSession<undefined, undefined, SessionData> = ({
	headers,
}) => {
	const theme = getThemeFromCookie(headers.cookie)

	return {theme}
}
