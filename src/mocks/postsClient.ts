import {PostsClient, Post} from '../lib/PostsClient'
import {generatePosts} from './generators/posts'

export class MockPostsClient implements PostsClient {
  private posts: Post[]

  constructor(posts: Post[]) {
    this.posts = posts
  }

  findPosts = async () => this.posts

  findPostBySlug = async (slug: string) =>
    this.posts.find((post) => post.slug === slug)
}

export const mockPostsClient = new MockPostsClient(generatePosts(20))
