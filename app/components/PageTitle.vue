<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>

<template>
  <h2 class="page-title">{{ text }}</h2>
</template>
