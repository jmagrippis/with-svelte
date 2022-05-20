import {lessonsRepo} from '$lib/repos/lessons'
import type {RequestHandler} from '@sveltejs/kit'

// GET /lessons
export const get: RequestHandler = async () => {
	const lessons = lessonsRepo.getAll()

	return {
		body: {lessons},
	}
}
