export type LessonAttributes = {
	title: string
	date: string
	videoUrl: string
}

export type GetAllLesson = {
	attributes: LessonAttributes
	href: string
}

export type Lesson = {
	html: string
	attributes: LessonAttributes
}

class LessonsRepo {
	getAll = () => {
		const relativePathsToContent = import.meta.globEager('./content/*.md')
		return Object.entries(relativePathsToContent)
			.map(([path, {attributes}]) => ({
				attributes,
				href: `/lessons/${path.match(/\.\/content\/(.+).md/)?.[1]}`,
			}))
			.sort((a, b) =>
				new Date(a.attributes.date) > new Date(b.attributes.date) ? -1 : 1
			)
	}

	get = (slug: string) => import(`./content/${slug}.md`)
}

export const lessonsRepo = new LessonsRepo()
