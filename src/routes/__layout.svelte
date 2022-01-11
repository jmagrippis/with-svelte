<script lang="ts">
	import '../app.css'

	import {theme} from '$lib/stores/theme'
	import Header from '$lib/components/Header.svelte'
	import Footer from '$lib/components/Footer.svelte'
</script>

<div id="theme-container" class={$theme}>
	<div id="app-container">
		<Header />

		<main class="flex-grow flex flex-col items-center justify-center">
			<slot />
		</main>

		<Footer />
	</div>
</div>
