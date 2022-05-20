import {lessonsRepo} from '$lib/repos/lessons'
import type {RequestHandler} from '@sveltejs/kit'

// GET /lessons/:slug
export const get: RequestHandler<{slug: string}> = async ({params: {slug}}) => {
	const lesson = await lessonsRepo.get(slug)

	try {
		return {body: {lesson}}
	} catch (error) {
		return {
			status: 404,
			body: `could not find lesson for "${slug}"`,
		}
	}
}
