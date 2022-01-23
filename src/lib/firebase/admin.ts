import type {App} from 'firebase-admin/app'
import {initializeApp} from 'firebase-admin/app'
import {getAuth} from 'firebase-admin/auth'
import {credential} from 'firebase-admin'

if (
	!import.meta.env.VITE_FIREBASE_PROJECT_ID ||
	!import.meta.env.VITE_FIREBASE_ADMIN_CLIENT_EMAIL ||
	!import.meta.env.VITE_FIREBASE_ADMIN_PRIVATE_KEY
) {
	throw new Error('Firebase Admin environment variables not set')
}

const privateKey = import.meta.env.VITE_FIREBASE_ADMIN_PRIVATE_KEY.replace(
	/\\n/g,
	'\n'
)
let adminApp: App | null = null

export const getAdminApp = (): App => {
	if (!adminApp) {
		adminApp = initializeApp({
			credential: credential.cert({
				privateKey,
				projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
				clientEmail: import.meta.env.VITE_FIREBASE_ADMIN_CLIENT_EMAIL,
			}),
		})
	}

	return adminApp
}

export const generateMagicLink = (email: string, redirectUrl: string) => {
	const actionCodeSettings = {
		url: redirectUrl,
	}
	return getAuth(getAdminApp()).generateSignInWithEmailLink(
		email,
		actionCodeSettings
	)
}
