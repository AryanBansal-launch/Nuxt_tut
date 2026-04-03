<template>
  <div class="streaming-container">
    <nav class="nav">
      <NuxtLink to="/">Home</NuxtLink> |
      <NuxtLink to="/large-response-test">Large Response Test</NuxtLink>
    </nav>

    <h1>Transfer-Encoding: Chunked Streaming Test</h1>
    <p class="description">
      This replicates the iODigital customer use case. Click a button below.
      <strong> If streaming works:</strong> text should appear word-by-word
      incrementally. <strong>If buffered (Launch issue):</strong> the full
      response appears all at once.
    </p>

    <div class="button-group">
      <button
        @click="runStream('fast')"
        :disabled="loading"
        class="stream-button"
      >
        Stream (Fast)
      </button>
      <button
        @click="runStream('medium')"
        :disabled="loading"
        class="stream-button"
      >
        Stream (Medium)
      </button>
      <button
        @click="runStream('slow')"
        :disabled="loading"
        class="stream-button"
      >
        Stream (Slow)
      </button>
    </div>

    <p v-if="loading" class="loading-text">
      Streaming…
    </p>

    <div v-if="output" class="output-container">
      <div class="output-box">
        {{ output }}
      </div>

      <div v-if="startTime || firstChunkTime || doneTime" class="timing-info">
        <p v-if="startTime">
          Request started: {{ new Date(startTime).toISOString() }}
        </p>
        <p v-if="firstChunkTime && startTime">
          First chunk delay: <strong>{{ firstChunkTime - startTime }}ms</strong>
          (low = streaming; high = likely buffered)
        </p>
        <p v-if="doneTime && startTime">
          Total time: <strong>{{ doneTime - startTime }}ms</strong>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const output = ref("");
const loading = ref(false);
const startTime = ref<number | null>(null);
const firstChunkTime = ref<number | null>(null);
const doneTime = ref<number | null>(null);

async function runStream(speed: "fast" | "medium" | "slow") {
  output.value = "";
  loading.value = true;
  startTime.value = Date.now();
  firstChunkTime.value = null;
  doneTime.value = null;

  try {
    const res = await fetch(`/api/stream?speed=${speed}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const reader = res.body?.getReader();
    const decoder = new TextDecoder();

    if (!reader) {
      output.value = "No response body stream available";
      loading.value = false;
      return;
    }

    let firstChunkReceived = false;
    let fullText = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      const chunk = decoder.decode(value, { stream: true });
      if (!firstChunkReceived) {
        firstChunkTime.value = Date.now();
        firstChunkReceived = true;
      }

      fullText += chunk;
      output.value = fullText;
    }

    doneTime.value = Date.now();
  } catch (err) {
    output.value = `Error: ${err instanceof Error ? err.message : String(err)}`;
  } finally {
    loading.value = false;
  }
}
</script>

<style scoped>
.streaming-container {
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
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
}

.stream-button {
  padding: 10px 16px;
  cursor: pointer;
  background-color: #0070f3;
  color: white;
  border: none;
  border-radius: 6px;
  transition: background-color 0.2s;
}

.stream-button:hover:not(:disabled) {
  background-color: #0051cc;
}

.stream-button:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

.loading-text {
  color: #333;
  font-size: 14px;
  margin-bottom: 8px;
}

.output-container {
  margin-top: 16px;
}

.output-box {
  padding: 16px;
  background-color: #f5f5f5;
  border-radius: 8px;
  min-height: 80px;
  font-family: monospace;
  white-space: pre-wrap;
  word-break: break-word;
  margin-bottom: 16px;
  color: #1a1a1a;
}

.timing-info {
  font-size: 13px;
  color: #333;
}

.timing-info p {
  margin: 4px 0;
}
</style>