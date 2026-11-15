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
  <article class="card certification-card mx-auto h-full w-96 max-w-full bg-base-100 shadow-sm">
    <figure class="px-10 pt-10">
      <button class="h-56 w-full cursor-zoom-in border-0 bg-transparent p-0" type="button" @click="emit('view', image, title)">
        <img :src="image" :alt="alt" class="h-full w-full rounded-xl object-contain">
      </button>
    </figure>
    <div class="card-body items-center text-center">
      <h2 class="card-title">{{ title }}</h2>
      <p>Issued by {{ provider }}</p>
      <p>Verification code: {{ verification }}</p>
      <div class="card-actions mt-auto">
        <a class="btn btn-primary" :href="verifyUrl" target="_blank" rel="noopener noreferrer">
          Verify
        </a>
      </div>
    </div>
  </article>
</template>
