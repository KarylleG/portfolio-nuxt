<script setup lang="ts">
defineProps<{
  image: string | null
  title: string
}>()

const emit = defineEmits<{
  close: []
}>()
</script>

<template>
  <div v-if="image" class="lightbox" role="dialog" aria-modal="true" :aria-label="title" @click.self="emit('close')">
    <div class="lightbox-content">
      <button class="lightbox-close" type="button" aria-label="Close certificate preview" @click="emit('close')">
        ×
      </button>
      <img :src="`/pictures/${image}`" :alt="title">
      <p>{{ title }}</p>
    </div>
  </div>
</template>
