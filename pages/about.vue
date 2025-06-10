<!-- 
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
// console.log('line 14......');
// try {
//   const { data: user, error } = await useFetch('https://randomuser.me/api/',{
//   cache: "no-store"
// }
// ); 
// console.log("inside try block and nothing broke!");
// } catch (error) {
//   console.log('Error fetching user data');
//   console.log(error);
// }
// console.log('line 15......');
const { data: user, error } = await useFetch('https://randomuser.me/api/',{
  cache: "no-store"
});
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
</template> -->

<script setup>
useHead({
  title: 'About | My Portfolio'
})
const { locales, setLocale } = useI18n()
definePageMeta({
  prerender: true
})

const { data: response, error } = await useFetch('https://nextjs-ssr-isr-demo-wce75vr67bt8.devcontentstackapps.com/api/hello', {
  cache: 'no-store'
})
</script>

<template>
  <section>
    <button v-for="locale in locales" @click="setLocale(locale.code)">
      {{ locale.name }}
    </button>
    <h1>{{ $t('welcome') }}</h1>
    <h1>About Me</h1>
    <p>
      I’m a web developer passionate about building clean and functional websites.
      This portfolio is built with Nuxt.js!
    </p>

    <div v-if="response && response.randomNum !== undefined">
      <h2>Random Number</h2>
      <p><strong>randomNum:</strong> {{ response.randomNum }}</p>
    </div>

    <div v-else-if="error">
      <p>Error fetching data.</p>
    </div>

    <div v-else>
      <p>Loading...</p>
    </div>
  </section>
</template>
