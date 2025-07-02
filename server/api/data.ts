export default defineEventHandler(() => {
  console.log('data API called')
  const sample="Aryan";
  console.log("Log from data API",sample);
  return {
    timestamp: new Date().toISOString(),
  }
})
