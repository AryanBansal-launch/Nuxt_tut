<template>
  <section>
    <h1>About Me</h1>
    <p>
      I’m a web developer passionate about building clean and functional websites.
      This portfolio is built with Nuxt.js!
    </p>

    <div v-if="todo.data.value">
      <h2>Random Todo</h2>
      <p><strong>ID:</strong> {{ todo.data.value.id }}</p>
      <p><strong>Title:</strong> {{ todo.data.value.title }}</p>
      <p><strong>Completed:</strong> {{ todo.data.value.completed ? 'Yes' : 'No' }}</p>
    </div>

    <div v-else-if="todo.pending">
      <p>Loading todo...</p>
    </div>

    <div v-else-if="todo.error">
      <p>Error loading todo.</p>
    </div>
  </section>
</template>

<script setup>
useHead({
  title: 'About | My Portfolio'
})

const randomId = Math.floor(Math.random() * 200) + 1
const todo = await useFetch('https://jsonplaceholder.typicode.com/todos/' + randomId)
</script>
