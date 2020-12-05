<script>
	import Header from '$components/Header.svelte'
	import Footer from '$components/Footer.svelte'
</script>

<main>
  <Header/>
  <slot/>
  <Footer/>
</main>

<style>
  :root {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}

	main {
		text-align: center;
		padding: 1em;
		margin: 0 auto;
	}
</style>
