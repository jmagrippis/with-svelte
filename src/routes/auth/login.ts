import type {RequestHandler} from '@sveltejs/kit'
import {generateMagicLink} from '$lib/firebase/admin'
import type {Locals} from 'src/hooks'

const TEN_MINUTES_IN_SECONDS = 10 * 60

// POST /auth/login
export const post: RequestHandler<Locals, FormData, string> = async (
	request
) => {
	const email = request.body.get('email')
	if (!email) {
		return {status: 400, body: 'no email submitted'}
	}

	const redirectTo = `${request.url.origin}/auth/confirm`

	try {
		const link = await generateMagicLink(email, redirectTo)

		console.log('link generated!', link)

		return {
			status: 200,
			body: `email sent to ${email}`,
			headers: {
				'Set-Cookie': `magicEmail=${email}; SameSite=Strict; HttpOnly; Secure; Max-Age=${TEN_MINUTES_IN_SECONDS}`,
			},
		}
	} catch (error) {
		if (error.erroInfo.code === 'auth/invalid-email') {
			return {
				status: 400,
				body: `email ${email} address is improperly formatted`,
			}
		}

		console.error(error)
		return {
			status: 500,
			body: `there was a problem sending an email to ${email}`,
		}
	}
}
