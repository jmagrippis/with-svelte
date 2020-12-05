import faker from 'faker'

export function generatePost({
  title = faker.lorem.sentence(),
  ...partial
} = {}) {
  return {
    title,
    id: faker.random.uuid(),
    content: faker.lorem.paragraphs(),
    slug: faker.helpers.slugify(title),
    ...partial,
  }
}

export function generatePosts(count = 10) {
  return [...Array(count).keys()].map(() => generatePost())
}
