<script setup lang="ts">
defineProps<{
  label: string
  image: string
  url: string
}>()
</script>

<template>
  <a class="social-link" :href="url" target="_blank" rel="noopener noreferrer">
    <img :src="`/pictures/${image}`" :alt="`${label} Logo`">
    {{ label }}
  </a>
</template>
