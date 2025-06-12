export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path === '/contact') {
    console.log(`Contact page accessed at: ${new Date().toISOString()}`)
    console.log(`User navigated from: ${from?.path || 'direct access'}`)
  }
})