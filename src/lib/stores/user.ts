import {session} from '$app/stores'
import type {SessionStore} from 'src/hooks'
import {derived} from 'svelte/store'

export type User = {
	id: string
	email: string
}

export const user = derived<SessionStore, User>(session, ($session, set) => {
	set($session.user)
})

export const setUser = (user: User | null) => {
	session.update(($session) => ({...$session, user}))
}
