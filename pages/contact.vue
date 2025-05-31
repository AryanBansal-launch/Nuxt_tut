<template>
  <section>
    <h1>Contact</h1>
    <p>
      You can reach me via email at
      <a href="mailto:me@example.com">me@example.com</a>.
    </p>

    <div v-if="randomjson.data.value">
      <h2>Random Todo</h2>
      <p><strong>ID:</strong> {{ randomjson.data.value.id }}</p>
      <p><strong>Title:</strong> {{ randomjson.data.value.title }}</p>
      <p><strong>Completed:</strong> {{ randomjson.data.value.completed ? 'Yes' : 'No' }}</p>
    </div>

    <div v-else-if="randomjson.pending">
      <p>Loading...</p>
    </div>

    <div v-else-if="randomjson.error">
      <p>Error loading data.</p>
    </div>
  </section>
</template>

<script setup>
useHead({ title: 'Contact | My Portfolio' })

const randomnumber = Math.floor(Math.random() * 200) + 1

const randomjson = await useFetch(
  'https://jsonplaceholder.typicode.com/todos/' + randomnumber
)
</script>
