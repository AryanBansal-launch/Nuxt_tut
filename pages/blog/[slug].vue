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
  
  const key = `random-user-${route.params.slug}`

const fetchUser = async () => {
  const res = await $fetch('https://randomuser.me/api/')
  const user = res.results[0]
  user.fetchedAt = new Date().toISOString()
  return user
}

const { data: user, error } = await useAsyncData(key, fetchUser)

  </script>
  