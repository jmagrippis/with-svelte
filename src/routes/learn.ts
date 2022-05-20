import {lessonsRepo} from '$lib/repos/lessons'
import type {RequestHandler} from '@sveltejs/kit'

// GET /learn
export const get: RequestHandler = async () => {
	const lessons = lessonsRepo.getAll()

	return {
		body: {lessons},
	}
}
