import gql from 'graphql-tag'

import type {SeriesRepo} from './Repo'

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
  latest = async () => {
    return []
  }
}

export const seriesRepo = new ContentfulSeriesRepo()
