<script setup lang="ts">
useHead({ title: 'About | Karylle Gimalalud' })
useSeoMeta({
  description: 'Learn more about Karylle Gimalalud, her interests, and her programming journey.',
  ogTitle: 'About | Karylle Gimalalud',
  ogDescription: 'Learn more about Karylle Gimalalud, her interests, and her programming journey.',
  ogImage: '/pictures/about-me-profile.png',
  twitterCard: 'summary'
})

const hobbies = [
  {
    title: 'Coding',
    description: 'I enjoy coding in my free time because it allows me to create and experiment with new ideas. Whether building small apps, working in Android Studio with Java and XML, or learning new concepts, coding challenges me, sharpens my problem-solving skills, and gives me a sense of accomplishment.'
  },
  {
    title: 'Gaming',
    description: 'Gaming is one of my favorite ways to relax and recharge. It lets me immerse myself in different worlds, strategize, and improve focus and adaptability. Playing games helps me relieve stress, think creatively, and approach challenges with a clearer mindset, making it both enjoyable and beneficial to my personal growth.'
  },
  {
    title: 'Traveling',
    description: 'Traveling is a hobby I love because it lets me explore new places and experience diverse cultures. I enjoy discovering local traditions, tasting unique foods, and meeting new people. Every trip broadens my perspective, inspires creativity, and teaches me valuable lessons about adaptability, patience, and appreciating the world’s diversity.'
  }
]
</script>

<template>
  <div class="page-section">
    <section class="about-section">
      <div class="about-image">
        <img src="/pictures/about-me-profile.png" alt="About Me Picture">
      </div>
      <div class="about-text">
        <PageTitle text="About Me" />
        <p>Hello! My name is Karylle, and I’m currently a student with a strong passion for programming and technology. I have solid foundations in Java, SQL, and HTML, and I enjoy learning how to build functional and interactive applications.</p>
        <p>I am eager to develop my skills further, explore new technologies, and create projects that solve real-world problems. I also enjoy experimenting with Android Studio using XML and Java whenever I have free time.</p>
      </div>
    </section>
    <PageTitle text="Hobbies" />
    <section class="hobbies">
      <HobbyCard v-for="hobby in hobbies" :key="hobby.title" v-bind="hobby" />
    </section>
  </div>
</template>
