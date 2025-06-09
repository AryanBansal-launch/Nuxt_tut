// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  ssr: true, 
  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/scripts",
    "@nuxt/image",
    "@nuxt/test-utils",
    "@nuxt/ui",
  ],
  nitro: {
    prerender: {
      crawlLinks: false,
      routes: ["/about"],
    },
  },
  routeRules: {
    "/blog": {
      isr: 60,
      headers: {
        "Cache-Control":
          "public, max-age=0, s-maxage=60, stale-while-revalidate=30",
      },
    },
    "/contact":{
      headers:{
        "Cache-Control":"no-store"
      }
    },
    "/test/**":{
      headers:{
        "Cache-Control":"public, max-age=0, s-maxage=60, stale-while-revalidate=30"
      } 
    }
  }
});

