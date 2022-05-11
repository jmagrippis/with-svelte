import {config} from 'dotenv-flow'
import {browser} from '$app/env'

config()

export const getServerOnlyEnvVar = (key: string) => {
	if (browser) {
		throw new Error('attempting to access server-only env var on the browser')
	}

	return process.env[key]
}
