<template>
  <div id="app">
    <HeaderBar />
    <main class="container">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </main>
    <FooterBar />
  </div>
</template>

<script setup>
import HeaderBar from '~/components/HeaderBar.vue'
import FooterBar from '~/components/FooterBar.vue'
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap');

body {
  margin: 0;
  font-family: 'Inter', sans-serif;
  background-color: #f9fafb;
  color: #1f2937;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main.container {
  flex: 1;
  padding: 2rem;
  max-width: 1024px;
  margin: 0 auto;
}
</style>
