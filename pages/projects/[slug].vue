<template>
    <div>
      <h1>{{ slug }}</h1>
      <p>This is the project page for the project with slug: {{ slug }}</p>
    </div>
  </template>
  
  <script setup>
  const route = useRoute()
  const slug = route.params.slug
  </script>
  