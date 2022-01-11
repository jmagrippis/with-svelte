export const getCookieValue = (cookie: string, name: string): string | null =>
	cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop() || null
