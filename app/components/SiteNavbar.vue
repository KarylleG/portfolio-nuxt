<script setup lang="ts">
const isMenuOpen = ref(false)

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Tech Stack', to: '/tech-stack' },
  { label: 'Certifications', to: '/certifications' }
]

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <nav class="navbar">
    <div class="navdiv">
      <NuxtLink class="logo" to="/" @click="closeMenu">
        <img src="/pictures/gimalalud-website-logo.svg" alt="Karylle logo">
        <span>Karylle</span>
      </NuxtLink>

      <button
        class="navbar-burger"
        type="button"
        :aria-expanded="isMenuOpen"
        aria-label="Toggle navigation menu"
        @click="isMenuOpen = !isMenuOpen"
      >
        <span />
        <span />
        <span />
      </button>

      <ul class="nav-links" :class="{ 'is-active': isMenuOpen }">
        <li v-for="link in links" :key="link.to">
          <NuxtLink :to="link.to" @click="closeMenu">{{ link.label }}</NuxtLink>
        </li>
        <li>
          <NuxtLink class="contact-link" to="/contact-me" @click="closeMenu">Contact Me</NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>
