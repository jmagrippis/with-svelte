const themes = ['light', 'dark'] as const
export type Theme = typeof themes[number]

export const isTheme = (theme: string): theme is Theme =>
	themes.includes(theme as Theme)

export type User = {
	id: string
	email: string
}
