<template>
    <footer class="footer">
      <div class="footer-content">
        <p>&copy; {{ new Date().getFullYear() }} My Portfolio. All rights reserved.</p>
      </div>
    </footer>
  </template>
  
  <style scoped>
  .footer {
    background-color: #111827;
    color: #d1d5db;
    text-align: center;
    padding: 1rem 2rem;
    margin-top: auto;
  }
  
  .footer-content {
    max-width: 1024px;
    margin: 0 auto;
  }
  </style>
  