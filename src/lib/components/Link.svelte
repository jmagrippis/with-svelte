<script lang="ts">
  export let href: string
  export let target: string = undefined
  export let rel: string = undefined
  export let ariaLabel: string = undefined
</script>

<a
  class="text-svelte-prime hover:text-rose-400 transition-colors duration-200 ease-out"
  {href}
  {target}
  {rel}
  aria-label={ariaLabel}><slot /></a
>
