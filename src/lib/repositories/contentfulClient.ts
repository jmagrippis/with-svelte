import fetch from 'node-fetch'

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

export const contentfulClient = {
  get: async (query: string) => {
    try {
      const response = await fetch(`${endpoint}?query=${query}`, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      if (!response || !response.ok) {
        throw new Error()
      }

      return response.json()
    } catch (err) {
      throw new Error('Could not fetch data from Contentful')
    }
  },
}
