// Import the functions you need from the SDKs you need
import type {FirebaseApp} from 'firebase/app'
import {initializeApp} from 'firebase/app'
import {
	getAuth,
	isSignInWithEmailLink,
	sendSignInLinkToEmail,
	setPersistence,
	signInWithEmailLink,
	inMemoryPersistence,
} from 'firebase/auth'

const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
	projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
}

let clientApp: FirebaseApp
export const getClientApp: () => FirebaseApp = () => {
	if (!clientApp) {
		clientApp = initializeApp(firebaseConfig)
		const auth = getAuth(clientApp)
		setPersistence(auth, inMemoryPersistence)
	}
	return clientApp
}

export const isMagicLink = (link: string) => {
	const auth = getAuth(getClientApp())

	return isSignInWithEmailLink(auth, link)
}

export const signInWithMagicLink = (email: string, link: string) => {
	const auth = getAuth(getClientApp())

	return signInWithEmailLink(auth, email, link)
}

export const sendMagicLink = (email: string, redirectUrl: string) => {
	const auth = getAuth(getClientApp())
	const actionCodeSettings = {
		url: redirectUrl,
		handleCodeInApp: true,
	}
	return sendSignInLinkToEmail(auth, email, actionCodeSettings)
}
