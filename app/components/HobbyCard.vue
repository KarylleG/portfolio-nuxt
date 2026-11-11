<script setup lang="ts">
defineProps<{
  title: string
  description: string
}>()
</script>

<template>
  <article class="hobby-card">
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
  </article>
</template>
