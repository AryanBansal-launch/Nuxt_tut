<!-- pages/blogs.vue -->
<template>
  <div>
    <h1>All Blogs Test dynamic ISR</h1>
    <ul>
      <li v-for="blog in blogs" :key="blog.id">
        <NuxtLink :to="`/test/${blog.id}`">{{ blog.title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
const { data: blogs } = await useAsyncData('all-blogs', () => $fetch('/api/blogs'))
</script>
