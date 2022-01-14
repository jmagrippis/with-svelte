import type {RequestHandler} from '@sveltejs/kit'

import {getThemeFromCookie} from '$lib/getThemeFromCookie'
import {isTheme} from '$lib/stores/theme'

// GET /theme
export const get: RequestHandler = async ({headers}) => {
	const theme = getThemeFromCookie(headers.cookie)

	return {
		body: theme,
	}
}

// PUT /theme
export const put: RequestHandler = async ({body}) => {
	const theme = body?.toString()

	if (!isTheme(theme)) {
		return {
			status: 400,
			body: `not a valid theme value: ${theme}`,
		}
	}

	return {
		body: theme,
		headers: {
			'set-cookie': `theme=${theme}; SameSite=Strict; HttpOnly; Secure`,
		},
	}
}
