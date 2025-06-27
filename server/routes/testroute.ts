export default defineEventHandler((event) => {
    console.log('testroute API called')
    // setHeader(event, 'cache-control', 'no-cache');
    return {
      timestamp: new Date().toISOString(),
    }
  })
  