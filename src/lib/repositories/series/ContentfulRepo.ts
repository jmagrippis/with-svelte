import type {LatestSeriesQuery} from '$lib/generated/graphql'
import {processMarkdown} from '$lib/processMarkdown'
import {contentfulClient} from '../contentfulClient'
import type {SeriesRepo} from './Repo'
import SERIES_QUERY from './latestSeries.graphql'

export class ContentfulSeriesRepo implements SeriesRepo {
  #client = contentfulClient

  latest = async () => {
    const {data} = await this.#client.get<LatestSeriesQuery>(SERIES_QUERY)

    return data.seriesCollection.items.map((item) => ({
      ...item,
      description: processMarkdown(item.description),
    }))
  }
}

export const seriesRepo = new ContentfulSeriesRepo()
