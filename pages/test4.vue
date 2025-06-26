<template>
    <div>
      <h1>This is test4 page</h1>
      <p>Hello: {{ val }}</p>
    </div>
  </template>
   <script setup>
   const { data } = await useFetch('/hello')
   const val = data.value;
   </script>
  