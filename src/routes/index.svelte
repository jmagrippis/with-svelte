<script>
  import Home from '$components/Home/Home.svelte'
  import {mockPostsClient} from '$mocks/postsClient'

  let postsPromise = mockPostsClient.findPosts()
</script>

<div class="container flex-grow">
  {#await postsPromise}
    <p>loading posts...</p>
  {:then posts}
    <Home {posts} />
  {:catch error}
    <p>Something went wrong: {error.message}</p>
  {/await}
</div>
