<template>
    <section>
      <h2 class="section-title">Projects</h2>
      <div class="projects-grid">
        <ProjectCard
          v-for="project in projects"
          :key="project.id"
          :title="project.title"
          :description="project.description"
          :image="project.image"
          :link="project.link"
        />
      </div>
    </section>
  </template>
  
  <script setup>
  import ProjectCard from '~/components/ProjectCard.vue'
  import proimg  from '../../public/image.png'
  
  const projects = [
    {
      id: 1,
      title: 'Project One',
      description: 'A brief description of Project One.',
      image: proimg,
      link: '/projects/project-one'
    },
    {
      id: 2,
      title: 'Project Two',
      description: 'A brief description of Project Two.',
      image: proimg,
      link: '/projects/project-two'
    },
    // Add more projects as needed
  ]
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
  