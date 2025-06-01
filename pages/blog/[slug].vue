<template>
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
  