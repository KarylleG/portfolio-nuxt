<script setup lang="ts">
const scriptSources = ['/scripts/particles.js', '/scripts/app.js']

onMounted(() => {
  for (const source of scriptSources) {
    const script = document.createElement('script')
    script.src = source
    script.async = false
    document.body.appendChild(script)
  }
})
</script>

<template>
  <div id="particles-js" aria-hidden="true" />
</template>
