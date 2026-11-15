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
  <nav class="navbar portfolio-navbar items-center justify-between px-4">
    <div class="navbar-start">
      <NuxtLink class="logo portfolio-logo" to="/" @click="closeMenu">
        <img src="/pictures/gimalalud-website-logo.png" alt="Karylle logo">
        <span>Karylle</span>
      </NuxtLink>
    </div>

    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal portfolio-nav-links">
        <li v-for="link in links" :key="link.to">
          <NuxtLink :to="link.to" @click="closeMenu">{{ link.label }}</NuxtLink>
        </li>
      </ul>
    </div>

    <div class="navbar-end hidden lg:flex">
      <NuxtLink class="btn contact-link" to="/contact-me" @click="closeMenu">Contact Me</NuxtLink>
    </div>

    <div class="dropdown mobile-nav lg:hidden">
      <button
        type="button"
        class="btn btn-ghost navbar-burger"
        :aria-expanded="isMenuOpen"
        aria-label="Toggle navigation menu"
        @click="isMenuOpen = !isMenuOpen"
      >
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </button>
      <ul v-if="isMenuOpen" class="menu menu-sm portfolio-mobile-menu">
        <li v-for="link in links" :key="link.to">
          <NuxtLink :to="link.to" @click="closeMenu">{{ link.label }}</NuxtLink>
        </li>
        <li>
          <NuxtLink class="btn contact-link" to="/contact-me" @click="closeMenu">Contact Me</NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>
