import type {App} from 'firebase-admin/app'
import {initializeApp, getApps, getApp, cert} from 'firebase-admin/app'
import {DecodedIdToken, getAuth} from 'firebase-admin/auth'

if (
	!import.meta.env.VITE_FIREBASE_PROJECT_ID ||
	!import.meta.env.VITE_FIREBASE_ADMIN_CLIENT_EMAIL ||
	!import.meta.env.VITE_FIREBASE_ADMIN_PRIVATE_KEY
) {
	throw new Error('Firebase Admin environment variables not set')
}

const projectId = import.meta.env.VITE_FIREBASE_PROJECT_ID
const clientEmail = import.meta.env.VITE_FIREBASE_ADMIN_CLIENT_EMAIL
const privateKey = import.meta.env.VITE_FIREBASE_ADMIN_PRIVATE_KEY.replace(
	/\\n/g,
	'\n'
)

const adminConfig = {
	credential: cert({
		privateKey,
		projectId,
		clientEmail,
	}),
}
export const getAdminApp = (): App =>
	getApps().length ? getApp() : initializeApp(adminConfig)

export const createSessionCookie = async (token: string, maxAge: number) => {
	const expiresIn = maxAge * 1000
	const auth = getAuth(getAdminApp())
	const session = await auth.createSessionCookie(token, {
		expiresIn,
	})

	return `session=${session}; SameSite=Strict; Path=/; HttpOnly; Secure; Max-Age=${maxAge};`
}

export const verifyIdToken = (token: string): Promise<DecodedIdToken> => {
	const auth = getAuth(getAdminApp())
	return auth.verifyIdToken(token)
}

export const getIdTokenFromSessionCookie = (
	sessionCookie: string | null
): Promise<DecodedIdToken | null> => {
	if (!sessionCookie) return null

	const auth = getAuth(getAdminApp())

	return auth.verifySessionCookie(sessionCookie, true).catch(() => null)
}
