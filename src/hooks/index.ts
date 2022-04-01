import type {GetSession, Handle} from '@sveltejs/kit'

import {ONE_DAY_IN_SECONDS, ONE_WEEK_IN_SECONDS} from '$lib/constants'
import {
	createSessionCookieForUserId,
	getIdTokenFromSessionCookie,
} from '$lib/firebase/admin'
import {getCookieValue} from '$lib/getCookieValue'

import {isTheme} from '../types'
import type {DecodedIdToken} from 'firebase-admin/auth'

const getThemeFromCookie = (cookie: string) => {
	const theme = getCookieValue(cookie, 'theme')
	return isTheme(theme) ? theme : null
}

const SIX_DAYS_IN_SECONDS = ONE_DAY_IN_SECONDS * 6

const shouldRefreshToken = (token: DecodedIdToken | null) =>
	token && token.exp - Date.now() / 1000 < SIX_DAYS_IN_SECONDS

export const handle: Handle = async ({event, resolve}) => {
	const cookie = event.request.headers.get('cookie')
	const token = await getIdTokenFromSessionCookie(
		getCookieValue(cookie, 'session')
	)

	event.locals.theme = getThemeFromCookie(cookie)
	event.locals.idToken = token

	const response = await resolve(event)

	if (!response.headers.get('set-cookie') && shouldRefreshToken(token)) {
		const freshSessionCookie = await createSessionCookieForUserId(
			token.uid,
			ONE_WEEK_IN_SECONDS
		)

		response.headers.set('set-cookie', freshSessionCookie)
	}

	return response
}

export const getSession: GetSession = ({locals}) => {
	const theme = locals.theme
	const user = locals.idToken
		? {id: locals.idToken.sub, email: locals.idToken.email}
		: null

	return {theme, user}
}
