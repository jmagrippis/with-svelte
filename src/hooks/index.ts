import {getIdTokenFromSessionCookie} from '$lib/firebase/admin'
import {getCookieValue} from '$lib/getCookieValue'
import type {GetSession, Handle} from '@sveltejs/kit'
import {isTheme} from '../types'

const getThemeFromCookie = (cookie: string) => {
	const theme = getCookieValue(cookie, 'theme')
	return isTheme(theme) ? theme : null
}

export const handle: Handle = async ({event, resolve}) => {
	const cookie = event.request.headers.get('cookie')
	event.locals.theme = getThemeFromCookie(cookie)
	event.locals.idToken = await getIdTokenFromSessionCookie(
		getCookieValue(cookie, 'session')
	)

	return resolve(event)
}

export const getSession: GetSession = ({locals}) => {
	const theme = locals.theme
	const user = locals.idToken
		? {id: locals.idToken.sub, email: locals.idToken.email}
		: null

	return {theme, user}
}
