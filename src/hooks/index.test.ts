import type {ServerRequest} from '@sveltejs/kit/types/hooks'
import {describe, it, expect} from 'vitest'

import {getSession} from '.'

describe('getSession', () => {
	it('returns a `null` theme value when there are no cookies in the request', () => {
		const request = {headers: {}} as unknown as ServerRequest<
			undefined,
			undefined
		>
		expect(getSession(request)).toEqual({theme: null})
	})

	it('returns the value of the theme cookie', () => {
		const requestA = {
			headers: {cookie: 'theme=dark'},
		} as unknown as ServerRequest<undefined, undefined>
		expect(getSession(requestA)).toEqual({theme: 'dark'})

		const requestB = {
			headers: {cookie: 'random=value; theme=light; answer=42'},
		} as unknown as ServerRequest<undefined, undefined>
		expect(getSession(requestB)).toEqual({theme: 'light'})
	})

	it('returns a `null` theme value when there is no theme cookie in the request', () => {
		const requestA = {headers: {cookie: ''}} as unknown as ServerRequest<
			undefined,
			undefined
		>
		expect(getSession(requestA)).toEqual({theme: null})

		const requestB = {
			headers: {cookie: 'answer=42'},
		} as unknown as ServerRequest<undefined, undefined>
		expect(getSession(requestB)).toEqual({theme: null})
	})
})
