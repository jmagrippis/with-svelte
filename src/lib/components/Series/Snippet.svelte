<script lang="ts">
  import type {CoreSeriesFieldsFragment} from '$lib/generated/graphql'

  export let series: CoreSeriesFieldsFragment
</script>

<li>
  <a href={`/series/${series.slug}`}>
    <img
      class="shadow-lg lg:rounded mb-4"
      src={series.heroImage.url}
      alt={series.heroImage.title}
      title={series.heroImage.title}
      width="1200"
      height="720"
    />
    <div class="px-2 lg:px-0">
      <h2 class="text-3xl mb-2">{series.title}</h2>
      <div class="text-xl text-gray-800 space-y-2">
        {@html series.description}
      </div>
    </div>
  </a>
</li>
