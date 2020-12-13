<script>
  import GithubMark from './GithubMark.svelte'
  import Link from './Link.svelte'
</script>

<nav
  class="container py-4 px-2 md:px-0 flex items-center text-lg text-svelte-prime">
  <a href="/" class="text-2xl font-thin mr-4 md:mr-8">With Svelte</a>
  <ul class="space-x-4 md:space-x-8 flex items-center flex-grow">
    <li>
      <Link href="/guides">Guides</Link>
    </li>
    <li>
      <Link href="/about">About</Link>
    </li>
  </ul>
  <Link
    href="https://github.com/jmagrippis/with-svelte"
    target="_blank"
    rel="noopener noreferrer"
    ariaLabel="github">
    <GithubMark className="w-6" />
  </Link>
</nav>
