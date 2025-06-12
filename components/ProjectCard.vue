<template>
    <div class="card">
      <!-- <img :src="image" :alt="title" class="card-image" /> -->
      <NuxtImg :src="image" :alt="title" class="card-image" />
      <div class="card-content">
        <h3 class="card-title">{{ title }}</h3>
        <p class="card-description">{{ description }}</p>
        <NuxtLink :to="link" class="card-button">Learn More →</NuxtLink>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    title: String,
    description: String,
    image: String,
    link: String,
  })
  </script>
  
  <style scoped>
  .card {
    background-color: #fff;
    border-radius: 0.5rem;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
  }
  
  .card-image {
    width: 100%;
    height: 180px;
    object-fit: cover;
  }
  
  .card-content {
    padding: 1rem;
  }
  
  .card-title {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
  
  .card-description {
    color: #4b5563;
    margin-bottom: 1rem;
  }
  
  .card-button {
    display: inline-block;
    color: #2563eb;
    font-weight: 500;
    text-decoration: none;
  }
  
  .card-button:hover {
    text-decoration: underline;
  }
  </style>
  