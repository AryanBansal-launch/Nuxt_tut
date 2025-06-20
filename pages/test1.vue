<template>
  <div>
    <h1>This is test1 page</h1>
  </div>
</template>
// in pages/test1.vue
<script setup>
definePageMeta({
  middleware: () => navigateTo('/test2', { redirectCode: 301 })
})
</script>


