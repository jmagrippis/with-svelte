import type {RequestHandler} from './__types/[slug]'
import {lessonsRepo} from '$lib/repos/lessons'

// GET /lessons/:slug
export const get: RequestHandler = async ({params: {slug}}) => {
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
