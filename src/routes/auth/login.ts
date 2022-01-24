import type {RequestHandler} from '@sveltejs/kit'
import type {Locals} from 'src/hooks'

const TEN_MINUTES_IN_SECONDS = 10 * 60

export const MAGIC_EMAIL_COOKIE_KEY = 'magicEmail'

// POST /auth/login
export const post: RequestHandler<Locals> = async (request) => {
	const email = request.body

	if (typeof email !== 'string' || !email) {
		return {status: 400, body: {error: 'no email submitted'}}
	}

	return {
		status: 200,
		body: {email},
		headers: {
			'Set-Cookie': `${MAGIC_EMAIL_COOKIE_KEY}=${email}; SameSite=Strict; HttpOnly; Secure; Max-Age=${TEN_MINUTES_IN_SECONDS}`,
		},
	}
}
