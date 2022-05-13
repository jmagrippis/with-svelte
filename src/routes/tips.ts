import type {RequestHandler} from '@sveltejs/kit'

// POST /tips
export const post: RequestHandler = async () => ({
	status: 200,
	body: {
		tips: ['It’s better to be active, than radioactive'],
	},
})
