<script setup lang="ts">
useHead({ title: 'Tech Stack | Karylle Gimalalud' })
useSeoMeta({
  description: 'Technologies and development tools Karylle Gimalalud has experience with.',
  ogTitle: 'Tech Stack | Karylle Gimalalud',
  ogDescription: 'Technologies and development tools Karylle Gimalalud has experience with.',
  ogImage: '/pictures/gimalalud-website-logo.svg',
  twitterCard: 'summary'
})

const technologies = [
  { name: 'Java', image: '/pictures/java-logo.png', alt: 'Java Logo', category: 'frontend' as const },
  { name: 'HTML', image: '/pictures/html-logo.png', alt: 'HTML Logo', category: 'frontend' as const },
  { name: 'CSS', image: '/pictures/css-logo.png', alt: 'CSS Logo', category: 'frontend' as const },
  { name: 'JavaScript', image: '/pictures/javascript-logo.png', alt: 'JavaScript Logo', category: 'frontend' as const },
  { name: 'SQL', image: '/pictures/mysql-logo.png', alt: 'SQL Logo', category: 'database' as const },
  { name: 'PostgreSQL', image: '/pictures/postgresql-logo.png', alt: 'PostgreSQL Logo', category: 'database' as const },
  { name: 'VS Code', image: '/pictures/visual-studio-code-logo.png', alt: 'Visual Studio Code Logo', category: 'devtools' as const },
  { name: 'Android Studio', image: '/pictures/android-studio-logo.png', alt: 'Android Studio Logo', category: 'devtools' as const },
  { name: 'SSMS', image: '/pictures/sql-server-management-studio-logo.png', alt: 'SQL Server Management Studio Logo', category: 'devtools' as const },
  { name: 'Git', image: '/pictures/git-logo.png', alt: 'Git Logo', category: 'devtools' as const },
  { name: 'GitHub', image: '/pictures/github-logo.png', alt: 'GitHub Logo', category: 'devtools' as const }
]

const categoryLabels = [
  { label: 'Frontend', category: 'frontend' },
  { label: 'Database', category: 'database' },
  { label: 'Development Tools', category: 'devtools' }
]
</script>

<template>
  <div class="page-section tech-page">
    <section class="tech-intro">
      <PageTitle text="Tech Stack" />
      <p>Here are some of the technologies and tools that I have experience with:</p>
    </section>
    <section class="tech-legends" aria-label="Technology categories">
      <div v-for="category in categoryLabels" :key="category.category" class="tech-legend" :class="category.category">
        <h4>{{ category.label }}</h4>
      </div>
    </section>
    <section class="tech-grid">
      <TechStackCard v-for="technology in technologies" :key="technology.name" v-bind="technology" />
    </section>
  </div>
</template>
