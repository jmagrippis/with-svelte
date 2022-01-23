<script lang="ts">
	export let href: string
	export let prefetch: true | null = null
</script>

<a
	{href}
	sveltekit:prefetch={prefetch}
	class="block relative text-2xl md:text-3xl font-thin px-6 py-4 bg-gradient-to-br hover:bg-gradient-to-tl from-prime to-primary-600 no-underline text-white rounded shadow hover:shadow-lg dark:shadow-prime/20 transition-shadow active:top-[-1px]"
>
	<slot />
</a>
