// server/api/blogs/[id].ts
export default defineEventHandler(async (event) => {
  const id = event.context.params?.id

  setHeader(event, 'Cache-Control', 's-maxage=300, stale-while-revalidate=600') // CDN cache
  return {
    id,
    title: `Blog Post ${id}`,
    content: `This is content for blog post ${id}.`,
    fetchedAt: new Date().toISOString()
  }
})
