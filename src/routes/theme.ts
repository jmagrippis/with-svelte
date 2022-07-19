import type {RequestHandler} from '@sveltejs/kit'
import {isTheme} from '../types'

// PUT /theme
export const PUT: RequestHandler = async ({request}) => {
	const theme = await request.text()

	if (!isTheme(theme)) {
		return {
			status: 400,
			body: `not a valid theme value: ${theme}`,
		}
	}

	return {
		headers: {
			'Set-Cookie': `theme=${theme}; SameSite=Strict; HttpOnly; Path=/`,
		},
	}
}

// DELETE /theme
export const DELETE: RequestHandler = async () => ({
	status: 204,
	headers: {
		'Set-Cookie': `theme= ; Max-Age=0; SameSite=Strict; HttpOnly; Path=/`,
	},
})
