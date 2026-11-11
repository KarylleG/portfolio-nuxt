<script setup lang="ts">
useHead({ title: 'Contact Me | Karylle Gimalalud' })
useSeoMeta({
  description: 'Connect with Karylle Gimalalud on LinkedIn or GitHub.',
  ogTitle: 'Contact Me | Karylle Gimalalud',
  ogDescription: 'Connect with Karylle Gimalalud on LinkedIn or GitHub.',
  ogImage: '/pictures/gimalalud-website-logo.svg',
  twitterCard: 'summary'
})
</script>

<template>
  <section class="contact-section">
    <div class="contact-text">
      <PageTitle text="Get in Touch!" />
      <p>Hi there! I’d love to hear from you and get to know you better. Whether you have questions, ideas, or just want to say hello, feel free to reach out. I enjoy connecting with people and sharing thoughts on anything interesting. Don’t hesitate to drop a message anytime—I’m always happy to chat. Looking forward to hearing from you soon!</p>
    </div>
    <div class="social-links">
      <SocialLinkButton label="LinkedIn" image="linkedin-logo.png" url="https://www.linkedin.com/in/karylle-gimalalud-b8ab68400/" />
      <SocialLinkButton label="GitHub" image="github-logo.png" url="https://github.com/KarylleG" />
    </div>
  </section>
</template>
