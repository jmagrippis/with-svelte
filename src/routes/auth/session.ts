import {createSessionCookie, verifyIdToken} from '$lib/firebase/admin'
import type {RequestHandler} from '@sveltejs/kit'

const ONE_WEEK_IN_SECONDS = 7 * 24 * 60 * 60

// POST /auth/session
export const post: RequestHandler = async ({request}) => {
	const authHeader = request.headers.get('Authorization')
	const [scheme, token] = authHeader.split(' ')
	if (scheme !== 'Bearer' || !token) {
		return {status: 401, body: 'invalid authorization header'}
	}

	try {
		const {sub, email} = await verifyIdToken(token)

		const sessionCookie = await createSessionCookie(token, ONE_WEEK_IN_SECONDS)

		const user = {
			id: sub,
			email,
		}

		return {
			status: 200,
			body: user,
			headers: {
				'Set-Cookie': sessionCookie,
			},
		}
	} catch {
		return {status: 401, body: 'invalid token'}
	}
}

const expiredCookie = 'session=; SameSite=Strict; Path=/; HttpOnly; Max-Age=0;'

export const del: RequestHandler = () => {
	return {
		status: 200,
		headers: {
			'Set-Cookie': expiredCookie,
		},
	}
}
