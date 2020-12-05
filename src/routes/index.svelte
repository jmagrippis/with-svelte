<script>
	import Home from '$components/Home/Home.svelte'
	import { mockPostsClient } from '$mocks/postsClient';

	let postsPromise = mockPostsClient.findPosts()
</script>

{#await postsPromise}
	<p>loading posts...</p>
{:then posts}
	<Home posts={posts} />
{:catch error}
	<p>Something went wrong: {error.message}</p>
{/await}
