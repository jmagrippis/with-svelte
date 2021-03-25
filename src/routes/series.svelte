<script context="module" lang="ts">
  import type {Load} from '@sveltejs/kit'

  export const load: Load = async ({fetch}) => {
    const url = '/series.json'
    const res = await fetch(url)

    if (res.ok) {
      return {
        props: {
          series: await res.json(),
        },
      }
    }

    return {
      status: res.status,
      error: new Error(`Could not load ${url}`),
    }
  }
</script>

<script lang="ts">
  import PageHeading from '$lib/components/PageHeading.svelte'
  import Hero from '$lib/components/Series/Hero.svelte'
  import Snippet from '$lib/components/Series/Snippet.svelte'
  import type {CoreSeriesFieldsFragment} from '$lib/generated/graphql'
  export let series: CoreSeriesFieldsFragment[]

  $: firstSeries = series[0]
  $: otherSeries = series.slice(1)
</script>

<section class="container flex-grow">
  <PageHeading>Series</PageHeading>
  <Hero series={firstSeries} />
  <ul class="space-y-6 lg:space-y-0 lg:grid lg:gap-6 lg:grid-cols-3">
    {#each otherSeries as series}
      <Snippet {series} />
    {/each}
  </ul>
</section>
