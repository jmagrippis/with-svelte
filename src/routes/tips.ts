import type {RequestHandler} from '@sveltejs/kit'

// POST /tips
export const POST: RequestHandler = async () => ({
	status: 200,
	body: {
		tips: ['It’s better to be active, than radioactive'],
	},
})
