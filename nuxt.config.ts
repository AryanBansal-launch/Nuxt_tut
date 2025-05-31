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
  // routeRules: {
  //   // Cache static assets for 1 year
  //   '/_nuxt/**': {
  //     headers: {
  //       'Cache-Control': 'public, max-age=31536000, immutable'
  //     }
  //   },
  //   // Cache your API routes for 5 minutes
  //   '/api/**': {
  //     headers: {
  //       'Cache-Control': 'public, max-age=300'
  //     }
  //   },
  //   // Prevent caching of your HTML pages (for SSR)
  //   '/**': {
  //     headers: {
  //       'Cache-Control': 's-maxage=300, stale-while-revalidate=60'
  //     }
  //   }
  // }
  routeRules: {
    // Fully Static (SSG): prerendered at build time
    '/about': { prerender: true },

    // SSR: dynamic content rendered on each request
    '/contact': { ssr: true },

    // ISR: regenerates the page in background every 300s
    '/blog/**': {
      swr: true,                    // Enables stale-while-revalidate (ISR)
      headers: {
        'Cache-Control': 's-maxage=300, stale-while-revalidate=60'
      }
    },

    // Default fallback: SSR or as defined in `ssr: true/false`
    '/**': { ssr: true }
  }
})