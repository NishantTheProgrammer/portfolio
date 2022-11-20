<script setup lang="ts">
import NavBar from '@/components/NavBar.vue';
import ProjectCard from '@/components/ProjectCard.vue';

</script>

<template>
  <NavBar></NavBar>
  <main>
    <section class="p-20">
      <h2 class="text-4xl">Projects</h2>
      <div class="grid grid-cols-2 justify-center items-center gap-10 mt-10">
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
      </div>
    </section>
  </main>
</template>
