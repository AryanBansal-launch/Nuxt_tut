<template>
    <div>
      <h1>🔁 SWR Demo</h1>
      <p>Page rendered at: {{ time }}</p>
    </div>
  </template>
  
  <script setup>
  const { data } = await useFetch('/api/data')
  const time = data.value.timestamp
  </script>
  