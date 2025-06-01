<template>
  <section>
    <h1>Contact</h1>
    <p>
      You can reach me via email at
      <a href="mailto:me@example.com">me@example.com</a>.
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

<script setup>
useHead({ title: 'Contact | My Portfolio' })

// const randomnumber = Math.floor(Math.random() * 200) + 1

const user = await useFetch('https://randomuser.me/api/')
</script>
