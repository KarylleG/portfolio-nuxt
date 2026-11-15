<script setup lang="ts">
const error = useError()

const goHome = () => clearError({ redirect: '/' })
</script>

<template>
  <section class="home-hero error-page" aria-labelledby="error-title">
    <p class="error-code">{{ error?.statusCode || 404 }}</p>
    <h1 id="error-title" class="page-title error-title">Page Not Found</h1>
    <p class="error-description">The page you are looking for does not exist.</p>
    <div class="hero-links error-actions">
      <button class="portfolio-button" type="button" @click="goHome">Back to Home</button>
    </div>
  </section>
</template>

<style scoped>
.error-page {
  box-sizing: border-box;
  min-height: calc(100vh - 65px);
  min-height: calc(100svh - 65px);
  padding: 24px 20px;
  background: transparent;
}

.error-code {
  color: #7D7D7D;
  font-family: 'Poppins', sans-serif;
  font-size: clamp(2.5rem, 8vw, 4rem);
  font-weight: bold;
  line-height: 1;
}

.error-title {
  font-weight: bold;
}

.error-description {
  max-width: 500px;
  padding-top: 10px;
  font-size: 17px;
  line-height: 1.5;
}

.error-actions {
  margin-top: 8px;
}

.error-actions .portfolio-button:focus-visible {
  outline: 2px solid #4DA3FF;
  outline-offset: 3px;
}
</style>
