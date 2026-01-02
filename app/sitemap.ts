import { getWritings } from 'app/writings/utils'

export const baseUrl = 'https://neil.place';

export const dynamic = "force-static";

export default async function sitemap() {
  let writings = getWritings().map((post) => ({
    url: `${baseUrl}/writings/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))

  let routes = ['', '/writings'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...writings]
}
