<script>
  import PageHeading from '$components/PageHeading.svelte'
  import Link from '$components/Link'
</script>

<section class="container flex-grow">
  <PageHeading>About</PageHeading>

  <div>
    We are learning
    <Link
      href="https://svelte.dev"
      target="_blank"
      rel="noopener noreferrer"
      ariaLabel="github">
      Svelte
    </Link>
    as we’re building this, and so will you!
  </div>
</section>
