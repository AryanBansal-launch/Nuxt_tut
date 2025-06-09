<template>
    <header class="header">
      <div class="nav-container">
        <h1 class="logo">My Portfolio</h1>
        <nav>
          <NuxtLink to="/" exact-active-class="active">Home</NuxtLink>
          <NuxtLink to="/about" exact-active-class="active">About</NuxtLink>
          <NuxtLink to="/projects" exact-active-class="active">Projects</NuxtLink>
          <NuxtLink to="/contact" exact-active-class="active">Contact</NuxtLink>
          <NuxtLink to="/blog" exact-active-class="active">Blog_static_ISR</NuxtLink>
          <NuxtLink to="/test" exact-active-class="active">Test_Dynamic_ISR</NuxtLink>
        </nav>
      </div>
    </header>
  </template>
  
  <style scoped>
  .header {
    background-color: #ffffff;
    border-bottom: 1px solid #e5e7eb;
    padding: 1rem 2rem;
    position: sticky;
    top: 0;
    z-index: 10;
  }
  
  .nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1024px;
    margin: 0 auto;
  }
  
  .logo {
    font-weight: 600;
    font-size: 1.25rem;
  }
  
  nav a {
    margin-left: 1.5rem;
    text-decoration: none;
    color: #374151;
    font-weight: 500;
  }
  
  nav a.active {
    color: #2563eb;
    border-bottom: 2px solid #2563eb;
  }
  </style>
  