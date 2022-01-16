<script lang="ts">
	import '../app.css'

	import Header from '$lib/components/Header.svelte'
	import Footer from '$lib/components/Footer.svelte'
	import {theme} from '$lib/stores/theme'
</script>

<div id="theme-container" class={$theme}>
	<div id="app-content">
		<Header />

		<main class="flex-grow flex flex-col items-center justify-center">
			<slot />
		</main>

		<Footer />
	</div>
</div>
