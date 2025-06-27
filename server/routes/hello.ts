export default defineEventHandler((event) => {
    console.log('API called')
    // setHeader(event, 'cache-control', 'no-cache');
    return {
      timestamp: new Date().toISOString(),
    }
  })
  