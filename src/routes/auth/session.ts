import {createSessionCookie, verifyIdToken} from '$lib/firebase/admin'
import type {RequestHandler} from '@sveltejs/kit'
import type {Locals} from 'src/hooks'
import {MAGIC_EMAIL_COOKIE_KEY} from './login'

const ONE_WEEK_IN_SECONDS = 7 * 24 * 60 * 60

// POST /auth/session
export const post: RequestHandler<Locals> = async (request) => {
	const [scheme, token] = request.headers.authorization.split(' ')
	if (scheme !== 'Bearer' || !token) {
		return {status: 401, body: 'invalid authorization header'}
	}

	const {sub, email} = await verifyIdToken(token)

	const sessionCookie = await createSessionCookie(token, ONE_WEEK_IN_SECONDS)
	const expiredMagicEmailCookie = `${MAGIC_EMAIL_COOKIE_KEY}=; SameSite=Strict; HttpOnly; Secure; Max-Age=0`

	const user = {
		id: sub,
		email: email,
	}

	return {
		status: 200,
		body: user,
		headers: {
			'Set-Cookie': [sessionCookie, expiredMagicEmailCookie],
		},
	}
}

export const del: RequestHandler<Locals> = async () => {
	const expiredSessionCookie =
		'session=; SameSite=Strict; path=/; HttpOnly; Secure; Max-Age=0'

	return {
		status: 200,
		headers: {
			'Set-Cookie': expiredSessionCookie,
		},
	}
}
