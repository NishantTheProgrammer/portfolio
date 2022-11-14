<script setup lang="ts">
import NavBar from '@/components/NavBar.vue';
import ProjectCard from '@/components/ProjectCard.vue';
import Role from '@/components/Role.vue';
</script>

<template>
  <NavBar></NavBar>
  <main>
    <section class="h-[88vh] flex items-end justify-between px-20">
      <div class="w-3/5 h-full p-40">
        <Role></Role>
        <h1 class="text-4xl mt-5">Mobile Application developer <br><span class="text-xl">at Max vision solutions PVT.
            LTD.</span></h1>
        <p class="text-sm text-gray-400 mt-20 font-mono">A curious tech guy with awesome technical skills and great
          thinking ability I like to build logic behind the seens rather than using any ready made tool.</p>
        <a href="mailto:knishant113@gmail.com" class="block mt-20 text-green-400 underline font-bold">LET'S TALK!</a>
        <div class="grid grid-cols-2 mt-20">
          <div class="flex gap-3 items-center">
            <h3 class="text-6xl">2</h3>
            <p class="text-lg text-gray-400 font-mono">Years <br>Experience</p>
          </div>
          <div class="flex gap-3 items-center">
            <h3 class="text-6xl">18</h3>
            <p class="text-lg text-gray-400 font-mono">Projects <br>completed</p>
          </div>
        </div>
      </div>
      <div class="h-full w-2/5 flex justify-end">
        <img src="./../assets/nishant.png" style="filter: drop-shadow(0px 0px 2px black);" alt="Nishant" class="h-full">
      </div>
    </section>
    <section class="h-screen grid grid-cols-2">
      <div class="flex flex-col justify-center items-center gap-10 p-20">
        <div class="shadow-md bg-zinc-700 p-10 rounded-xl w-full">
          <h2 class="text-emerald-500 text-3xl font-mono">Front End</h2>
          <p class="text-sm text-gray-400 font-mono text-justify mt-5">Lorem ipsum dolor sit, amet consectetur
            adipisicing
            elit.
            Exercitationem voluptates in aut quam nesciunt eum amet inventore</p>
          <RouterLink to="projects" class="underline hover:text-emerald-400 mt-10 block">2 0 projects</RouterLink>
        </div>
        <div class="shadow-md bg-zinc-700 p-10 rounded-xl w-full">
          <h2 class="text-emerald-500 text-3xl font-mono">Back End</h2>
          <p class="text-sm text-gray-400 font-mono text-justify mt-5">Lorem ipsum dolor sit, amet consectetur
            adipisicing
            elit.
            Exercitationem voluptates in aut quam nesciunt eum amet inventore</p>
          <RouterLink to="projects" class="underline hover:text-emerald-400 mt-10 block">10 projects</RouterLink>
        </div>
      </div>
      <div class="flex justify-center  flex-col gap-10 p-20">
        <p class="text-sm text-gray-400 font-mono">Introduction</p>
        <h2 class="text-4xl font-mono">Hello! I'm Nishant</h2>
        <p class="text-xl italic">Every flsfjls</p>
        <p class="text-sm text-gray-400 font-mono text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing
          elit.
          Exercitationem voluptates in aut quam nesciunt eum amet inventore earum incidunt eligendi obcaecati labore
          molestiae, consequuntur quo, sunt aliquam modi eveniet possimus adipisci magni id porro. Tempora eligendi eos
          iste consectetur, eius magni voluptatum quibusdam sed! Expedita quaerat obcaecati nobis aliquid
          magnam?</p>
      </div>
    </section>
    <section class="h-screen">
      <h2 class="px-20 text-4xl">Latest works</h2>
      <div class="grid grid-cols-2 justify-center items-center gap-10 p-20">
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <div class="shadow-md border-emerald-300 border p-10 rounded-xl w-full">
          <h2 class="text-emerald-500 text-3xl font-mono">All Projects</h2>
          <p class="text-sm text-gray-400 font-mono text-justify mt-5">* Some projects are not allow to be published by NDA. If you want to see more, <RouterLink to="projects" class="underline text-emerald-400">Contact</RouterLink></p>
          <p class="mt-10 opacity-0">.</p>
        </div>
      </div>
    </section>
  </main>
</template>
