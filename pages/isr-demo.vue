<template>
    <div>
      <h1>🚀 ISR Demo</h1>
      <p>Page rendered at: {{ time }}</p>
    </div>
  </template>
  
  <script setup>
  const time = new Date().toLocaleTimeString()
  </script>
  