<script>
  import PageHeading from '$lib/PageHeading.svelte'
  import Link from '$lib/Link.svelte'
</script>

<section class="container flex-grow">
  <PageHeading>About</PageHeading>

  <div>
    We are learning
    <Link
      href="https://svelte.dev"
      target="_blank"
      rel="noopener noreferrer"
      ariaLabel="github"
    >
      Svelte
    </Link>
    as we’re building this, and so will you!
  </div>

  <div>
    Illustrations courtsey of <Link
      href="https://undraw.co"
      target="_blank"
      rel="noopener noreferrer"
    >
      unDraw
    </Link>
  </div>
</section>
