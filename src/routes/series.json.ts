import type {RequestHandler} from '@sveltejs/kit'

import {seriesRepo} from '$lib/repositories/series/ContentfulRepo'

export const get: RequestHandler = async () => {
  const series = await seriesRepo.latest()

  return {
    body: series,
  }
}
