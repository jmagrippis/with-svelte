import type {RequestEvent} from '@sveltejs/kit'
import {describe, it, expect, vi} from 'vitest'

import {handle} from '.'

vi.mock('$lib/firebase/admin', () => ({
	getIdTokenFromSessionCookie: vi.fn(() => Promise.resolve('mock-id-token')),
}))

describe('handle', () => {
	it('puts a `null` theme value in the locals when there are no cookies in the request', async () => {
		const resolve = vi.fn()
		const headers = {
			get: (property: string) => headers[property] || '',
		}
		const event = {
			request: {
				headers,
			},
			locals: {},
		} as unknown as RequestEvent

		await handle({event, resolve})

		expect(event.locals.theme).toBeNull()
	})

	it('returns the value of the theme cookie', async () => {
		const resolve = vi.fn()
		const headersA = {
			cookie: 'theme=dark',
			get: (property: string) => headersA[property] || '',
		}
		const eventA = {
			request: {
				headers: headersA,
			},
			locals: {},
		} as unknown as RequestEvent

		await handle({event: eventA, resolve})

		expect(eventA.locals.theme).toBe('dark')

		const headersB = {
			cookie: 'random=value; theme=light; answer=42',
			get: (property: string) => headersB[property] || '',
		}
		const eventB = {
			request: {
				headers: headersB,
			},
			locals: {},
		} as unknown as RequestEvent

		await handle({event: eventB, resolve})

		expect(eventB.locals.theme).toBe('light')
	})

	it('returns a `null` theme value when there is no theme cookie in the request', async () => {
		const resolve = vi.fn()
		const headersA = {
			cookie: '',
			get: (property: string) => headersA[property] || '',
		}
		const eventA = {
			request: {
				headers: headersA,
			},
			locals: {},
		} as unknown as RequestEvent

		await handle({event: eventA, resolve})

		expect(eventA.locals.theme).toBeNull()

		const headersB = {
			cookie: 'answer=42',
			get: (property: string) => headersB[property] || '',
		}
		const eventB = {
			request: {
				headers: headersB,
			},
			locals: {},
		} as unknown as RequestEvent

		await handle({event: eventB, resolve})

		expect(eventA.locals.theme).toBeNull()
	})
})
