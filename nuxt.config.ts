// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/scripts',
    '@nuxt/image',
    '@nuxt/test-utils',
    '@nuxt/ui'
  ],
  routeRules: {
    // Cache static assets for 1 year
    '/_nuxt/**': {
      headers: {
        'Cache-Control': 'public, max-age=31536000, immutable'
      }
    },
    // Cache your API routes for 5 minutes
    '/api/**': {
      headers: {
        'Cache-Control': 'public, max-age=300'
      }
    },
    // Prevent caching of your HTML pages (for SSR)
    '/**': {
      headers: {
        'Cache-Control': 's-maxage=300, stale-while-revalidate=60'
      }
    }
  },
  // experimental: {
  //   defaults: {
  //     nuxtLink: {
  //       prefetch: false,
  //     },
  //   },
  // },
})