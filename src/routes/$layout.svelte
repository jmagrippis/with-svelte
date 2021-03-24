<script>
  import Header from '$lib/Header.svelte'
  import Footer from '$lib/Footer.svelte'
</script>

<main class="flex flex-col justify-between min-h-screen">
  <Header />
  <slot />
  <Footer />
</main>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  html,
  body {
    @apply min-h-screen;
    font-family: 'Overpass', sans-serif;
  }
</style>
