<script>
  import PageHeading from '$components/PageHeading.svelte'
  import Posts from './Posts.svelte'

  export let posts
</script>

<PageHeading>Latest posts</PageHeading>

<Posts {posts} />
