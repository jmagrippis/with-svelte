<script>
  export let posts
</script>

<ul>
  {#each posts as post}
    <li><a href={`post/${post.slug}`}>{post.title}</a></li>
  {/each}
</ul>
