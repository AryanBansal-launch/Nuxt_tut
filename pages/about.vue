<!-- <script setup>
useHead({
  title: 'About | My Portfolio'
})

// const randomId = Math.floor(Math.random() * 200) + 1

// Destructuring only data
// const todo = await useFetch('todo', () =>
//   $fetch('https://jsonplaceholder.typicode.com/todos/' + randomId)
// )
const user = await useFetch('https://randomuser.me/api/');
</script>

<template>
  <section>
    <h1>About Me</h1>
    <p>
      I’m a web developer passionate about building clean and functional websites.
      This portfolio is built with Nuxt.js!
    </p>

    <div v-if="todo.data.value">
      <h2>Random user</h2>
      <p><strong>ID:</strong> {{ todo.data.value.id }}</p>
      <p><strong>Title:</strong> {{ todo.data.value.title }}</p>
      <p><strong>Completed:</strong> {{ todo.data.value.completed ? 'Yes' : 'No' }}</p>
    </div>

    <div v-else>
      <p>Loading or error...</p>
    </div>
  </section>
</template> -->
<script setup>
useHead({
  title: 'About | My Portfolio'
})

// Fetch random user data
const user = await useFetch('https://randomuser.me/api/')
</script>

<template>
  <section>
    <h1>About Me</h1>
    <p>
      I’m a web developer passionate about building clean and functional websites.
      This portfolio is built with Nuxt.js!
    </p>

    <div v-if="user.data.value">
      <h2>Random User</h2>
      <p><strong>Name:</strong> 
        {{ user.data.value.results[0].name.title }} 
        {{ user.data.value.results[0].name.first }} 
        {{ user.data.value.results[0].name.last }}
      </p>
      <p><strong>Email:</strong> {{ user.data.value.results[0].email }}</p>
      <p><strong>City:</strong> {{ user.data.value.results[0].location.city }}</p>
      <img 
        :src="user.data.value.results[0].picture.medium" 
        alt="User picture"
        width="100"
        height="100"
      />
    </div>

    <div v-else>
      <p>Loading or error...</p>
    </div>
  </section>
</template>
