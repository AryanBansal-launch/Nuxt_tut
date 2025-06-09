<template>
  <div>
    <h1>Blog static path (ISR)</h1>
    <pre>{{ user }}</pre>
    <p>Fetched at: {{ user?.fetchedAt }}</p>
    <p><strong>Random Number:</strong> {{ user?.randomNum }}</p>
  </div>
</template>

<script setup>
definePageMeta({
  isr: {
    expiration: 60 // Revalidate every 60 seconds
  }
})

const { data: user, error } = await useAsyncData('custom-api-static', () =>
  $fetch('https://nextjs-ssr-isr-demo-wce75vr67bt8.devcontentstackapps.com/api/hello')
    .then(res => {
      res.fetchedAt = new Date().toISOString()
      return res
    })
)
</script>
