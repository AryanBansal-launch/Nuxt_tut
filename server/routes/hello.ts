export default defineEventHandler(() => {
    console.log('API called')
    return {
      timestamp: new Date().toISOString(),
    }
  })
  