<template>
    <div>
      <h1>This is test4 page</h1>
      <p>Data from /server/routes/hello: {{ val }}</p>
      <p>Data from /server/api/data: {{ val2 }}</p>
    </div>
  </template>
   <script setup>
   const { data } = await useFetch('/hello', {
     cache: 'no-store'
   })
   const { data: data2 } = await useFetch('/api/data')
   const val = data.value.timestamp;
   const val2 = data2.value.timestamp;
   </script>
  