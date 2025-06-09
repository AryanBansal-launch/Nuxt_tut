<!-- pages/blogs/[id].vue -->
<template>
  <div>
    <h1>{{ blog.title }}</h1>
    <p>{{ blog.content }}</p>
    <p><em>Fetched at: {{ blog.fetchedAt }}</em></p>
  </div>
</template>

<script setup>
const route = useRoute()
const { data: blog } = await useAsyncData(`blog-${route.params.id}`, async () => {
  const data = await $fetch(`/api/blogs/${route.params.id}`)
  data.fetchedAt = new Date().toISOString()
  return data
})
</script>
