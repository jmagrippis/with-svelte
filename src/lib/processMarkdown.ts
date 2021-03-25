import remark from 'remark'
import html from 'remark-html'

export const processMarkdown = (md: string): string =>
  remark().use(html).processSync(md).contents as string
