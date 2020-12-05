<script context="module">
  import { mockPostsClient } from "$mocks/postsClient";

	export async function preload(page) {
		const { slug } = page.params

    const post = await mockPostsClient.findPostBySlug(slug)
		return { post }
	}
</script>

<script>
  export let post
</script>

<h1>{post.title}</h1>
<div>{post.content}</div>
