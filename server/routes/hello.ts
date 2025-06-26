export default defineEventHandler((event) => {
    console.log('API called')
    return {
      timestamp: new Date().toISOString(),
    }
  })
  