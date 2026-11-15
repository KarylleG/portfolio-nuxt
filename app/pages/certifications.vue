``<script setup lang="ts">
useHead({
  title: 'Certifications | Karylle Gimalalud',
  link: [{ rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css' }]
})
useSeoMeta({
  description: 'Professional and course certifications earned by Karylle Gimalalud.',
  ogTitle: 'Certifications | Karylle Gimalalud',
  ogDescription: 'Professional and course certifications earned by Karylle Gimalalud.',
  ogImage: '/pictures/gimalalud-certification-database.jpg',
  twitterCard: 'summary'
})

const professionalCertificates = [
  { title: 'Microsoft Office Specialist', image: '/pictures/gimalalud-certification-ms-word-associate.jpg', alt: 'MOS Certificate', verification: 'wAPrS-2FN4', verifyUrl: 'https://www.certiport.com/portal/pages/credentialverification.aspx', provider: 'Certiport' },
  { title: 'Microsoft Office Specialist', image: '/pictures/gimalalud-certification-ms-excel-associate.jpg', alt: 'MOS Certificate', verification: 'E7vR-4WVv', verifyUrl: 'https://www.certiport.com/portal/pages/credentialverification.aspx', provider: 'Certiport' },
  { title: 'Database', image: '/pictures/gimalalud-certification-database.jpg', alt: 'Database Certificate', verification: 'w6phv-48e2', verifyUrl: 'https://www.certiport.com/portal/pages/credentialverification.aspx', provider: 'Certiport' }
]

const courseCertificates = [
  { title: 'Software Engineering', image: '/pictures/gimalalud-certification-saylor-software-engineering.jpg', alt: 'Software Engineering Certificate', verification: '8335351152KG', verifyUrl: 'https://learn.saylor.org/admin/tool/certificate/index.php', provider: 'Saylor' },
  { title: 'Modern Database', image: '/pictures/gimalalud-certification-saylor-modern-database.jpg', alt: 'Modern Database Certificate', verification: '9868071098KG', verifyUrl: 'https://learn.saylor.org/admin/tool/certificate/index.php', provider: 'Saylor' }
]

const lightboxImage = ref<string | null>(null)
const lightboxTitle = ref('')

const openLightbox = (image: string, title: string) => {
  lightboxImage.value = image
  lightboxTitle.value = title
}

const closeLightbox = () => {
  lightboxImage.value = null
  lightboxTitle.value = ''
}

</script>

<template>
  <div class="page-section certifications-page">
    <PageTitle text="Professional Certifications" />
    <section class="certification-grid mt-6 mb-16 flex flex-wrap items-stretch justify-center gap-6">
      <CertificationCard
        v-for="certificate in professionalCertificates"
        :key="certificate.image"
        v-bind="certificate"
        @view="openLightbox"
      />
    </section>
    <PageTitle text="Course Certificates" />
    <section class="certification-grid mt-6 flex flex-wrap items-stretch justify-center gap-6">
      <CertificationCard
        v-for="certificate in courseCertificates"
        :key="certificate.image"
        v-bind="certificate"
        @view="openLightbox"
      />
    </section>
    <CertificationLightbox :image="lightboxImage" :title="lightboxTitle" @close="closeLightbox" />
  </div>
</template>
