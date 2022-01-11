import {derived} from 'svelte/store'
import {browser} from '$app/env'
import {session} from '$app/stores'
import type {SessionStore} from 'src/hooks'

export enum Theme {
	Light = 'light',
	Dark = 'dark',
}

export const isTheme = (theme: string): theme is Theme =>
	Object.values(Theme).includes(theme as Theme)

export const theme = derived<SessionStore, Theme>(session, ($session, set) => {
	if ($session.theme) {
		set($session.theme)
	} else {
		if (browser) {
			set(
				window.matchMedia('(prefers-color-scheme: dark)').matches
					? Theme.Dark
					: Theme.Light
			)
		}
	}
})

export const setTheme = (theme: Theme): void => {
	;(session as SessionStore).update(($session) => ({
		...$session,
		theme,
	}))

	fetch('/theme.json', {method: 'PUT', body: theme})
}
