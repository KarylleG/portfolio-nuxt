<script setup lang="ts">
const props = defineProps<{
  image: string | null
  title: string
}>()

const emit = defineEmits<{
  close: []
}>()

let previousBodyOverflow = ''

const close = () => emit('close')

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && props.image) close()
}

watch(
  () => props.image,
  (image) => {
    if (image) {
      previousBodyOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = previousBodyOverflow
    }
  }
)

onMounted(() => document.addEventListener('keydown', handleKeydown))
onBeforeUnmount(() => {
  document.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = previousBodyOverflow
})
</script>

<template>
  <Teleport to="body">
    <Transition name="fade">
      <div
        v-if="image"
        class="lightbox"
        role="dialog"
        aria-modal="true"
        :aria-label="title"
        @click.self="close"
      >
        <div class="lightbox-content">
          <button class="lightbox-close" type="button" aria-label="Close certificate preview" @click="close">
            ×
          </button>
          <img :src="image" :alt="title">
          <p>{{ title }}</p>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
