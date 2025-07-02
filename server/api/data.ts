export default defineEventHandler(() => {
  console.log('data API called')
  return {
    timestamp: new Date().toISOString(),
  }
})
