// Import the functions you need from the SDKs you need
import type {FirebaseApp} from 'firebase/app'
import {initializeApp} from 'firebase/app'
import {
	getAuth,
	isSignInWithEmailLink,
	signInWithEmailLink,
} from 'firebase/auth'

console.log('projectId', import.meta.env.VITE_FIREBASE_PROJECT_ID)
const firebaseConfig = {
	apiKey: 'AIzaSyB2umUF8t3gNolXOJkV46Lt2hyaFyYS9Yw',
	authDomain: 'with-svelte.firebaseapp.com',
	projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
}

let clientApp: FirebaseApp
export const getClientApp: () => FirebaseApp = () => {
	if (!clientApp) {
		clientApp = initializeApp(firebaseConfig)
	}
	return clientApp
}

export const isMagicCallbackLink = (link: string) => {
	const auth = getAuth(getClientApp())

	return isSignInWithEmailLink(auth, link)
}

export const signInWithMagicLink = (email: string, link: string) => {
	const auth = getAuth(getClientApp())

	return signInWithEmailLink(auth, email, link)
}
