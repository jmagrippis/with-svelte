// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app'
import {getAuth, sendSignInLinkToEmail} from 'firebase/auth'

const firebaseConfig = {
	apiKey: 'AIzaSyB2umUF8t3gNolXOJkV46Lt2hyaFyYS9Yw',
	authDomain: 'with-svelte.firebaseapp.com',
	projectId: 'with-svelte',
	storageBucket: 'with-svelte.appspot.com',
	messagingSenderId: '648572264622',
	appId: '1:648572264622:web:5f0b31a2c38b2bc3900d3f',
}

initializeApp(firebaseConfig)

const auth = getAuth()

export const sendMagicLink = (email: string, redirectUrl: string) => {
	const actionCodeSettings = {
		url: redirectUrl,
		handleCodeInApp: true,
	}
	return sendSignInLinkToEmail(auth, email, actionCodeSettings)
}
