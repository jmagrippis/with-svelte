import {session} from '$app/stores'
import type {User} from 'src/types'
import type {Writable} from 'svelte/store'
import {derived} from 'svelte/store'

export const user = derived<Writable<App.Session>, User>(
	session,
	($session, set) => {
		set($session.user)
	}
)

export const setUser = (user: User | null) => {
	session.update(($session) => ({...$session, user}))
}
