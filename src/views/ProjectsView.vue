<script setup lang="ts">
import NavBar from '@/components/NavBar.vue';
import ProjectCard from '@/components/ProjectCard.vue';
import { useProjectsStore } from '@/stores/project';
const { projects } = useProjectsStore();
console.log(projects);
</script>

<template>
  <NavBar></NavBar>
  <main>
    <section class="px-4 sm:px-8 lg:px-16 xl:px-20 py-10 sm:py-16 lg:py-20">
      <h2 class="text-4xl text-center">Projects</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 justify-center items-center gap-10 mt-10">
        <!-- Adjusting grid columns based on screen size -->
        <ProjectCard v-for="project in projects" :project="project"></ProjectCard>
      </div>
    </section>
  </main>
</template>
