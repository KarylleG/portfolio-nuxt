<script setup lang="ts">
const error = useError()

const goHome = () => clearError({ redirect: '/' })
</script>

<template>
  <main class="error-page">
    <p class="error-code">{{ error?.statusCode || 404 }}</p>
    <h1>Page Not Found</h1>
    <p>The page you are looking for does not exist.</p>
    <button class="portfolio-button btn btn-neutral" type="button" @click="goHome">Back to Home</button>
  </main>
</template>
