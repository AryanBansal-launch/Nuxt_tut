export default defineNuxtRouteMiddleware((to, from) => {
    const user = useUser()
    if (!user.value.name && to.path === '/projects') {
      return navigateTo('/')
    }
  })
  