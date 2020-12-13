<script>
  import Header from '$components/Header.svelte'
  import Footer from '$components/Footer.svelte'
</script>

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

<main class="flex flex-col justify-between min-h-screen">
  <Header />
  <slot />
  <Footer />
</main>
