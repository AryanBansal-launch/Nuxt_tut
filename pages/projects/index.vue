<template>
  <section>
    <h2 class="section-title">Projects</h2>
    <div class="projects-grid">
      <ProjectCard v-for="(project, index) in projects" :key="index" :title="project.title"
        :description="project.description" :image="proimg"
        :link="'/projects/' + project.title.toLowerCase().replace(/\s+/g, '-')" />
    </div>
  </section>
</template>

<script setup>
import ProjectCard from '~/components/ProjectCard.vue'
import proimg from '~/public/image.png'

//using useFetch to call the API endpoint
const { data: projects } = await useFetch('/api/projects')
</script>

<style scoped>
.section-title {
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
}

.projects-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}
</style>