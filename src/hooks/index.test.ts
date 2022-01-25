import type {ServerRequest} from '@sveltejs/kit/types/hooks'
import {describe, it, expect, vi} from 'vitest'

import {handle, Locals} from '.'

vi.mock('$lib/firebase/admin', () => ({getIdTokenFromSessionCookie: vi.fn()}))

describe('handle', () => {
	it('puts a `null` theme value in the locals when there are no cookies in the request', () => {
		const resolve = vi.fn()
		const request = {
			headers: {},
			locals: {},
		} as unknown as ServerRequest<Locals>

		handle({request, resolve})

		expect(request.locals.theme).toBeNull()
	})

	it('returns the value of the theme cookie', () => {
		const resolve = vi.fn()
		const requestA = {
			headers: {cookie: 'theme=dark'},
			locals: {},
		} as unknown as ServerRequest<Locals>

		handle({request: requestA, resolve})

		expect(requestA.locals.theme).toBe('dark')

		const requestB = {
			headers: {cookie: 'random=value; theme=light; answer=42'},
			locals: {},
		} as unknown as ServerRequest<Locals>

		handle({request: requestB, resolve})

		expect(requestB.locals.theme).toBe('light')
	})

	it('returns a `null` theme value when there is no theme cookie in the request', () => {
		const resolve = vi.fn()
		const requestA = {
			headers: {cookie: ''},
			locals: {},
		} as unknown as ServerRequest<Locals>

		handle({request: requestA, resolve})

		expect(requestA.locals.theme).toBeNull()

		const requestB = {
			headers: {cookie: 'answer=42'},
			locals: {},
		} as unknown as ServerRequest<Locals>

		handle({request: requestB, resolve})

		expect(requestA.locals.theme).toBeNull()
	})
})
