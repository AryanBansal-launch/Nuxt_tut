<template>
    <div>
      <h1>This is test4 page</h1>
      <p>Hello: {{ val }}</p>
    </div>
  </template>
   <script setup>
   const { data } = await useFetch('/hello', {
     headers: {
       'Cache-Control': 'no-cache, no-store, must-revalidate',
       'Pragma': 'no-cache',
       'Expires': '0'
     }
   })
   const val = data.value.timestamp;
   </script>
  