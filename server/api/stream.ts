/**
 * Chunked transfer encoding streaming API for Nuxt.js
 * Sends response in small chunks with delays - if streaming works,
 * the frontend will display content incrementally. If buffered (e.g. Launch),
 * the full response will appear at once.
 */
export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const speed = (query.speed as string) || "medium"; // fast, medium, slow

  const delayMs = speed === "fast" ? 50 : speed === "slow" ? 300 : 150;
  const words = [
    "Hello",
    "from",
    "the",
    "streaming",
    "API!",
    "Each",
    "word",
    "should",
    "appear",
    "incrementally",
    "as",
    "it",
    "arrives.",
    "If",
    "you",
    "see",
    "this",
    "all",
    "at",
    "once,",
    "streaming",
    "may",
    "be",
    "buffered",
    "at",
    "the",
    "edge.",
  ];

  // Set headers for streaming
  setHeader(event, "Content-Type", "text/plain; charset=utf-8");
  setHeader(event, "Cache-Control", "no-cache, no-store");
  
  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    async start(controller) {
      for (let i = 0; i < words.length; i++) {
        const chunk = (i === 0 ? "" : " ") + words[i];
        controller.enqueue(encoder.encode(chunk));
        await new Promise((r) => setTimeout(r, delayMs));
      }
      controller.close();
    },
  });

  return stream;
});