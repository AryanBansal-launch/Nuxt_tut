<script setup>
useHead({
  title: 'About | My Portfolio'
})

const randomId = Math.floor(Math.random() * 200) + 1

// Destructuring only data
const { data: todo } = await useAsyncData('todo', () =>
  $fetch('https://jsonplaceholder.typicode.com/todos/' + randomId),
  { server: false }
)
</script>

<template>
  <section>
    <h1>About Me</h1>
    <p>
      I’m a web developer passionate about building clean and functional websites.
      This portfolio is built with Nuxt.js!
    </p>

    <div v-if="todo">
      <h2>Random Todo</h2>
      <p><strong>ID:</strong> {{ todo.id }}</p>
      <p><strong>Title:</strong> {{ todo.title }}</p>
      <p><strong>Completed:</strong> {{ todo.completed ? 'Yes' : 'No' }}</p>
    </div>

    <div v-else>
      <p>Loading or error...</p>
    </div>
  </section>
</template>
