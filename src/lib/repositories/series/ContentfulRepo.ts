import type {LatestSeriesQuery} from '$lib/generated/graphql'
import {contentfulClient} from '../contentfulClient'
import type {SeriesRepo} from './Repo'
import {processMarkdown} from '$lib/processMarkdown'

export const CORE_SERIES_FIELDS = `
  fragment CoreSeriesFields on Series {
    title
    slug
    description
    heroImage {
      title
      width
      height
      url(
        transform: {
          format: JPG_PROGRESSIVE
          quality: 90
          width: 1200
          height: 720
          resizeStrategy: THUMB
        }
      )
    }
    lessonsCollection {
      total
    }
  }
`

const SERIES_QUERY = `
  ${CORE_SERIES_FIELDS}
  query LatestSeries {
    seriesCollection(order: [latestUpdate_DESC]) {
      items {
        ...CoreSeriesFields
      }
    }
  }
`

export class ContentfulSeriesRepo implements SeriesRepo {
  #client = contentfulClient

  latest = async () => {
    const {data} = await this.#client.get(SERIES_QUERY)
    return data.seriesCollection.items
  }
}

export const seriesRepo = new ContentfulSeriesRepo()
