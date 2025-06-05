<!-- <template>
    <div>
      <h1>Blog (ISR) - slug: {{ route.params.slug }}</h1>
      <pre>{{ user }}</pre>
      <p>Fetched at: {{ user?.fetchedAt }}</p>
    </div>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router'
  
  definePageMeta({
    isr: {
      expiration: 60 // Revalidate every 60 seconds
    }
  })
  
  const route = useRoute()
  
  const { data: user, error } = await useAsyncData(`random-user-${route.params.slug}`, () =>
    $fetch('https://randomuser.me/api/').then(res => {
      // Add timestamp to check revalidation
      res.results[0].fetchedAt = new Date().toISOString()
      return res.results[0]
    })
  )
  </script>
   -->

<template>
  <div>
    <h1>Blog (ISR) - slug: {{ route.params.slug }}</h1>
    <pre>{{ user }}</pre>
    <p>Fetched at: {{ user?.fetchedAt }}</p>
    <p><strong>Random Number:</strong> {{ user?.randomNum }}</p>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

definePageMeta({
  isr: {
    expiration: 60 // Revalidate every 60 seconds
  }
})

const route = useRoute()

const { data: user, error } = await useAsyncData(`custom-api-${route.params.slug}`, () =>
  $fetch('https://nextjs-ssr-isr-demo-wce75vr67bt8.devcontentstackapps.com/api/hello')
    .then(res => {
      // Preserve timestamp logic
      res.fetchedAt = new Date().toISOString()
      return res
    })
)
</script>
