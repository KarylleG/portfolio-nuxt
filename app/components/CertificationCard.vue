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
  <article class="card bg-base-100 w-96 shadow-sm certification-card">
    <figure class="px-10 pt-10">
      <button class="certificate-image-button" type="button" @click="emit('view', image, title)">
        <img :src="image" :alt="alt" class="rounded-xl">
      </button>
    </figure>
    <div class="card-body items-center text-center">
      <h2 class="card-title">{{ title }}</h2>
      <p>Verify Certificate: {{ verification }}</p>
      <div class="card-actions">
        <a class="btn btn-primary" :href="verifyUrl" target="_blank" rel="noopener noreferrer">
          Verify at {{ provider }} →
        </a>
      </div>
    </div>
  </article>
</template>
