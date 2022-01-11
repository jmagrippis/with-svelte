import {getCookieValue} from './getCookieValue'
import {isTheme, Theme} from './stores/theme'

export const getThemeFromCookie = (
	cookie: string | undefined
): Theme | null => {
	if (!cookie) return null

	const storedTheme = getCookieValue(cookie, 'theme')

	return isTheme(storedTheme) ? storedTheme : null
}
