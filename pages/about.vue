<!-- 
<script setup>
useHead({
  title: 'About | My Portfolio'
})

// Fetch random user data
const user = await useFetch('https://randomuser.me/api/')
definePageMeta({
  prerender: true 
})
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
</template> -->
<script setup>
// Set page title
useHead({
  title: 'About | My Portfolio'
})

// Prerender the page (SSG)
definePageMeta({
  prerender: true
})

// Fetch random user data at build time
const { data: user, error } = await useFetch('https://randomuser.me/api/')
</script>

<template>
  <section>
    <h1>About Me</h1>
    <p>
      I’m a web developer passionate about building clean and functional websites.
      This portfolio is built with Nuxt.js!
    </p>

    <div v-if="user && user.results">
      <h2>Random User</h2>
      <p><strong>Name:</strong> 
        {{ user.results[0].name.title }} 
        {{ user.results[0].name.first }} 
        {{ user.results[0].name.last }}
      </p>
      <p><strong>Email:</strong> {{ user.results[0].email }}</p>
      <p><strong>City:</strong> {{ user.results[0].location.city }}</p>
      <img 
        :src="user.results[0].picture.medium" 
        alt="User picture"
        width="100"
        height="100"
      />
    </div>

    <div v-else-if="error">
      <p>Error fetching data.</p>
    </div>

    <div v-else>
      <p>Loading...</p>
    </div>
  </section>
</template>
