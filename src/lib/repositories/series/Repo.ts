import type {CoreSeriesFieldsFragment} from '$lib/generated/graphql'

export interface SeriesRepo {
  latest(): Promise<CoreSeriesFieldsFragment[]>
}
