// server/api/blogs/[id].ts
export default defineEventHandler(async (event) => {
  const id = event.context.params?.id

  setHeader(event, 'Cache-Control', 'no-store') // CDN cache
  return {
    id,
    title: `Blog Post ${id}`,
    content: `This is content for blog post ${id}.`,
    fetchedAt: new Date().toISOString()
  }
})
