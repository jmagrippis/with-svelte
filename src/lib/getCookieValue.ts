export const getCookieValue = (
	cookie: string | null,
	name: string
): string | null =>
	cookie?.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop() || null
