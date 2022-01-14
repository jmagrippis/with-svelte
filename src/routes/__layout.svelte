<script lang="ts">
	import '../app.css'

	import Header from '$lib/components/Header.svelte'
	import Footer from '$lib/components/Footer.svelte'
</script>

<Header />

<main class="flex-grow flex flex-col items-center justify-center">
	<slot />
</main>

<Footer />
