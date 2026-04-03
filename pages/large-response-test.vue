<template>
  <div class="large-response-container">
    <nav class="nav">
      <NuxtLink to="/">Home</NuxtLink> |
      <NuxtLink to="/streaming-test">Streaming Test</NuxtLink>
    </nav>

    <h1>Large Response Test</h1>
    <p class="description">
      This page is a placeholder for testing large response handling.
      You can implement your large response test logic here.
    </p>

    <div class="button-group">
      <button @click="testLargeResponse" :disabled="loading" class="test-button">
        Test Large Response
      </button>
    </div>

    <p v-if="loading" class="loading-text">
      Loading large response...
    </p>

    <div v-if="response" class="response-container">
      <div class="response-box">
        {{ response }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const response = ref("");
const loading = ref(false);

async function testLargeResponse() {
  loading.value = true;
  response.value = "";

  try {
    // Simulate a large response - you can replace this with actual API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Generate a large response for demonstration
    const largeData = Array.from({ length: 1000 }, (_, i) => 
      `Line ${i + 1}: This is a large response to test how the application handles big data transfers.`
    ).join('\n');
    
    response.value = largeData;
  } catch (err) {
    response.value = `Error: ${err instanceof Error ? err.message : String(err)}`;
  } finally {
    loading.value = false;
  }
}
</script>

<style scoped>
.large-response-container {
  padding: 24px;
  max-width: 700px;
  font-family: sans-serif;
  color: #1a1a1a;
}

.nav {
  margin-bottom: 24px;
}

.nav a {
  color: #0070f3;
  text-decoration: none;
}

.nav a:hover {
  text-decoration: underline;
}

.description {
  color: #333;
  margin-bottom: 24px;
}

.button-group {
  margin-bottom: 24px;
}

.test-button {
  padding: 10px 16px;
  cursor: pointer;
  background-color: #0070f3;
  color: white;
  border: none;
  border-radius: 6px;
  transition: background-color 0.2s;
}

.test-button:hover:not(:disabled) {
  background-color: #0051cc;
}

.test-button:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

.loading-text {
  color: #333;
  font-size: 14px;
  margin-bottom: 8px;
}

.response-container {
  margin-top: 16px;
}

.response-box {
  padding: 16px;
  background-color: #f5f5f5;
  border-radius: 8px;
  max-height: 400px;
  overflow-y: auto;
  font-family: monospace;
  white-space: pre-wrap;
  word-break: break-word;
  color: #1a1a1a;
  font-size: 12px;
}
</style>