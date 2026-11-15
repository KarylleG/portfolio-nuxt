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
  <article class="card certification-card mx-auto h-full w-96 max-w-full border border-base-300 bg-base-100 shadow-sm transition-shadow duration-200 hover:shadow-md">
    <figure class="px-10 pt-10">
      <button class="h-56 w-full cursor-zoom-in rounded-xl border-0 bg-base-200 p-3 transition-colors duration-200 hover:bg-base-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary" type="button" @click="emit('view', image, title)">
        <img :src="image" :alt="alt" class="h-full w-full rounded-lg object-contain">
      </button>
    </figure>
    <div class="card-body items-center gap-3 text-center">
      <h2 class="card-title">{{ title }}</h2>
      <p>Issued by {{ provider }}</p>
      <p>Verification code: {{ verification }}</p>
      <div class="card-actions mt-auto pt-2">
        <a class="btn btn-primary" :href="verifyUrl" target="_blank" rel="noopener noreferrer">
          Verify
        </a>
      </div>
    </div>
  </article>
</template>
