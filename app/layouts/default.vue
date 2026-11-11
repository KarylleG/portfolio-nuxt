<template>
  <div class="portfolio-layout">
    <ParticleBackground />
    <SiteNavbar v-if="$route.path !== '/'" />
    <main class="portfolio-content">
      <slot />
    </main>
  </div>
</template>
