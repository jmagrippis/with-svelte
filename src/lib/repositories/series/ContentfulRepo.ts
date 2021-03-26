import {gql} from 'graphql-request/dist/index.js'

import type {LatestSeriesQuery} from '$lib/generated/graphql'
import {contentfulClient} from '../contentfulClient'
import type {SeriesRepo} from './Repo'
import {processMarkdown} from '$lib/processMarkdown'

export const CORE_SERIES_FIELDS = gql`
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

const SERIES_QUERY = gql`
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
    const data = await this.#client.request<LatestSeriesQuery>(SERIES_QUERY)

    return data.seriesCollection.items.map((item) => ({
      ...item,
      description: processMarkdown(item.description),
    }))
  }
}

export const seriesRepo = new ContentfulSeriesRepo()
