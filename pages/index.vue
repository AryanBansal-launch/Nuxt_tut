<template>
    <section class="hero">
      <h1 class="hero-title">Hi, I'm Aryan Bansal</h1>
      <p class="hero-subtitle">A passionate web developer crafting modern web experiences.</p>
      <NuxtLink to="/projects" class="hero-button">View My Work</NuxtLink>
    </section>
  </template>
  
  <script setup>
  useHead({
    title: 'Home | Aryan Bansal Portfolio'
  })
  </script>
  
  <style scoped>
  .hero {
    text-align: center;
    padding: 4rem 0;
  }
  
  .hero-title {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  
  .hero-subtitle {
    font-size: 1.25rem;
    margin-bottom: 2rem;
    color: #4b5563;
  }
  
  .hero-button {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    background-color: #2563eb;
    color: #ffffff;
    border-radius: 0.375rem;
    text-decoration: none;
    font-weight: 500;
  }
  
  .hero-button:hover {
    background-color: #1d4ed8;
  }
  </style>
  