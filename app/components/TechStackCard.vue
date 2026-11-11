<script setup lang="ts">
defineProps<{
  name: string
  image: string
  alt: string
  category: 'frontend' | 'database' | 'devtools'
}>()
</script>

<template>
  <article class="tech-card" :class="category">
    <img :src="image" :alt="alt">
    <h3>{{ name }}</h3>
  </article>
</template>
