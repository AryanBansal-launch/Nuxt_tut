export default defineEventHandler(async (event) => {
  setHeader(event, 'Cache-Control', 'no-store')
  const res = await $fetch(
    'https://nextjs-ssr-isr-demo-wce75vr67bt8.devcontentstackapps.com/api/hello'
  )
  return res
})
