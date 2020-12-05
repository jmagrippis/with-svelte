export interface Post {
  title: string
  id: string
  content: string
  slug: string
}

export interface PostsClient {
  findPosts(): Promise<Post[]>
  findPostBySlug(slug: string): Promise<Post>
}
