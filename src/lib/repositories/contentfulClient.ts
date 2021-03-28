import fetch from 'node-fetch'
import {GraphQLClient} from 'graphql-request/dist/index.js'

if (
  !import.meta.env.VITE_CONTENTFUL_ENDPOINT ||
  !import.meta.env.VITE_CONTENTFUL_DELIVERY_TOKEN
) {
  throw new Error(
    'Could not initialise Contenful client: environment variables not set'
  )
}

const endpoint = import.meta.env.VITE_CONTENTFUL_ENDPOINT as string
const token = import.meta.env.VITE_CONTENTFUL_DELIVERY_TOKEN
export const contentfulClient = new GraphQLClient(endpoint, {
  fetch,
  headers: {
    Authorization: `Bearer ${token}`,
  },
})
