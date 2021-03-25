<script lang="ts">
  import type {CoreSeriesFieldsFragment} from '$lib/generated/graphql'

  export let series: CoreSeriesFieldsFragment
</script>

<a
  href={`/series/${series.slug}`}
  class="pb-8 border-b border-svelte-prime mb-8 block xl:grid xl:grid-cols-3 gap-4 xl:gap-8 xl:gap-12"
>
  <img
    class="mb-6 xl:mb-0 xl:col-span-2 shadow-lg xl:rounded"
    src={series.heroImage.url}
    alt={series.heroImage.title}
    title={series.heroImage.title}
    width="1200"
    height="720"
  />
  <div class="px-2 xl:px-0">
    <h2 class="text-3xl mb-2">{series.title}</h2>
    <div class="text-xl text-gray-800 space-y-2">
      {@html series.description}
    </div>
  </div>
</a>
