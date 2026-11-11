<script setup lang="ts">
defineProps<{
  title: string
  image: string
  alt: string
  verification: string
  verifyUrl: string
  provider: string
}>()

const emit = defineEmits<{
  view: [image: string, title: string]
}>()
</script>

<template>
  <article class="certification-card">
    <h3>{{ title }}</h3>
    <button class="certificate-image-button" type="button" @click="emit('view', image, title)">
      <img :src="image" :alt="alt">
    </button>
    <h3>Verify Certificate: {{ verification }}</h3>
    <a class="portfolio-button btn btn-neutral" :href="verifyUrl" target="_blank" rel="noopener noreferrer">
      Verify at {{ provider }} →
    </a>
  </article>
</template>
