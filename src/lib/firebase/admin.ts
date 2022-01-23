import {initializeApp} from 'firebase-admin/app'
import {getAuth} from 'firebase-admin/auth'
import {credential} from 'firebase-admin'

if (
	!import.meta.env.VITE_FIREBASE_PROJECT_ID ||
	typeof import.meta.env.VITE_FIREBASE_PROJECT_ID !== 'string' ||
	!import.meta.env.VITE_FIREBASE_ADMIN_CLIENT_EMAIL ||
	typeof import.meta.env.VITE_FIREBASE_ADMIN_CLIENT_EMAIL !== 'string' ||
	!import.meta.env.VITE_FIREBASE_ADMIN_PRIVATE_KEY ||
	typeof import.meta.env.VITE_FIREBASE_ADMIN_PRIVATE_KEY !== 'string'
) {
	throw new Error('Firebase Admin environment variables not set')
}

const privateKey = import.meta.env.VITE_FIREBASE_ADMIN_PRIVATE_KEY.replace(
	/\\n/g,
	'\n'
)

initializeApp({
	credential: credential.cert({
		privateKey,
		projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
		clientEmail: import.meta.env.VITE_FIREBASE_ADMIN_CLIENT_EMAIL,
	}),
})

export const generateMagicLink = (email: string, redirectUrl: string) => {
	const actionCodeSettings = {
		url: redirectUrl,
		handleCodeInApp: true,
	}
	return getAuth().generateSignInWithEmailLink(email, actionCodeSettings)
}
