import {getIdTokenFromSessionCookie} from '$lib/firebase/admin'
import {getCookieValue} from '$lib/getCookieValue'
import type {Theme} from '$lib/stores/theme'
import type {User} from '$lib/stores/user'
import type {GetSession, Handle} from '@sveltejs/kit'
import type {DecodedIdToken} from 'firebase-admin/auth'
import type {Writable} from 'svelte/store'

export type SessionData = {
	theme: Theme | null
	user: User | null
	magicEmail: string | null
}
export type SessionStore = Writable<SessionData>

export type Locals = {
	theme: Theme | null
	idToken: DecodedIdToken
	magicEmail: string | null
}

export const handle: Handle = async ({request, resolve}) => {
	const {cookie} = request.headers
	request.locals.theme = getCookieValue(cookie, 'theme') as Theme | null
	request.locals.idToken = await getIdTokenFromSessionCookie(
		getCookieValue(cookie, 'session')
	)
	request.locals.magicEmail = getCookieValue(cookie, 'magicEmail')

	return resolve(request)
}

export const getSession: GetSession<Locals, undefined, SessionData> = ({
	locals,
}) => {
	const theme = locals.theme
	const user = locals.idToken
		? {id: locals.idToken.sub, email: locals.idToken.email}
		: null
	const magicEmail = locals.magicEmail

	return {theme, user, magicEmail}
}
