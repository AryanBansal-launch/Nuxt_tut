<template>
  <div id="app" class="error-app">
    <HeaderBar />
    <main class="container error-main">
      <div class="error-card">
        <div class="error-icon" aria-hidden="true">
          {{ is404 ? '⟳' : '!' }}
        </div>
        <h1 class="error-title">
          {{ is404 ? 'Page not found' : 'Something went wrong' }}
        </h1>
        <p class="error-message">
          {{ is404
            ? "The page you're looking for doesn't exist or has been moved."
            : error?.message || 'An unexpected error occurred.' }}
        </p>
        <div class="error-actions">
          <NuxtLink to="/" class="btn btn-primary">Back to Home</NuxtLink>
          <button v-if="!is404" type="button" class="btn btn-secondary" @click="tryAgain">
            Try again
          </button>
        </div>
      </div>
    </main>
    <FooterBar />
  </div>
</template>

<script setup>
import HeaderBar from '~/components/HeaderBar.vue'
import FooterBar from '~/components/FooterBar.vue'

const props = defineProps({
  error: {
    type: Object,
    default: null,
  },
})

const is404 = computed(() => props.error?.statusCode === 404)

function tryAgain() {
  clearError({ redirect: '/' })
}
</script>

<style scoped>
.error-app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.error-main {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  max-width: 1024px;
  margin: 0 auto;
}

.error-card {
  text-align: center;
  padding: 3rem 2rem;
  background: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
}

.error-icon {
  font-size: 4rem;
  line-height: 1;
  color: #9ca3af;
  margin-bottom: 1rem;
}

.error-title {
  font-size: 1.75rem;
  margin: 0 0 0.5rem;
  color: #1f2937;
}

.error-message {
  color: #6b7280;
  margin: 0 0 1.5rem;
  max-width: 28rem;
  margin-left: auto;
  margin-right: auto;
}

.error-actions {
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  display: inline-block;
  padding: 0.5rem 1.25rem;
  border-radius: 0.375rem;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  border: none;
  font-size: 1rem;
}

.btn-primary {
  background-color: #2563eb;
  color: #fff;
}

.btn-primary:hover {
  background-color: #1d4ed8;
}

.btn-secondary {
  background-color: #f3f4f6;
  color: #374151;
}

.btn-secondary:hover {
  background-color: #e5e7eb;
}
</style>
