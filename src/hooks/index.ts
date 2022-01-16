import type {Theme} from '$lib/components/stores/theme'
import type {GetSession} from '@sveltejs/kit'
import type {Writable} from 'svelte/store'

export type SessionData = {theme: Theme | null}
export type SessionStore = Writable<SessionData>

const getCookieValue = (cookie: string, name: string): string | null =>
	cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop() || null

export const getSession: GetSession<undefined, undefined, SessionData> = ({
	headers,
}) => {
	const theme = headers.cookie
		? (getCookieValue(headers.cookie, 'theme') as Theme)
		: null
	return {theme}
}
