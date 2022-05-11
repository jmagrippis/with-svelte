import type {App} from 'firebase-admin/app'
import type {DecodedIdToken} from 'firebase-admin/auth'
import {initializeApp, getApps, getApp, cert} from 'firebase-admin/app'
import {getAuth} from 'firebase-admin/auth'
import {getServerOnlyEnvVar} from '$lib/getServerOnlyEnvVar'

const projectId = import.meta.env.VITE_FIREBASE_PROJECT_ID
const clientEmail = getServerOnlyEnvVar('FIREBASE_ADMIN_CLIENT_EMAIL')
const privateKey = getServerOnlyEnvVar('FIREBASE_ADMIN_PRIVATE_KEY')?.replace(
	/\\n/g,
	'\n'
)
const apiKey = import.meta.env.VITE_FIREBASE_API_KEY

if (!projectId || !clientEmail || !privateKey || !apiKey) {
	throw new Error('Firebase Admin environment variables not set')
}

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

	return `session=${session}; SameSite=Strict; Path=/; HttpOnly; Max-Age=${maxAge};`
}

export const createSessionCookieForUserId = async (
	userId: string,
	maxAge: number
) => {
	const auth = getAuth(getAdminApp())

	const customToken = await auth.createCustomToken(userId, {})
	const firebaseIdToken = await fetch(
		`https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyCustomToken?key=${apiKey}`,
		{
			method: 'POST',
			body: JSON.stringify({token: customToken, returnSecureToken: true}),
		}
	)
		.then((res) => res.json())
		.then((res) => res.idToken)

	return createSessionCookie(firebaseIdToken, maxAge)
}

export const verifyIdToken = (token: string): Promise<DecodedIdToken> => {
	const auth = getAuth(getAdminApp())
	return auth.verifyIdToken(token)
}

export const getIdTokenFromSessionCookie = async (
	sessionCookie: string | null
): Promise<DecodedIdToken | null> => {
	if (!sessionCookie) return null

	const auth = getAuth(getAdminApp())

	return auth.verifySessionCookie(sessionCookie, true).catch(() => null)
}
