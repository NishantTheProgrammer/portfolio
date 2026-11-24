<script setup lang="ts">
import NavBar from '@/components/NavBar.vue';
import ProjectCard from '@/components/ProjectCard.vue';
import Role from '@/components/Role.vue';
import { useProjectsStore } from '@/stores/project';

const { projects } = useProjectsStore();
</script>

<template>
  <NavBar></NavBar>
  <main>
    <section class="xl:h-[88vh] flex items-end justify-between p-5 xl:px-20">
      <div class="xl:w-3/5 h-full md:py-40 xl:p-40">
        <Role></Role>
        <h1 class="text-4xl mt-5">Senior Software Engineer <br><span class="text-xl">at To The New (TTN)</span></h1>
        <p class="text-sm text-gray-400 mt-20 font-mono">
          Senior Software Engineer with 6 years of experience delivering 10+ scalable applications across diverse domains. Specialized in building robust backend services, microservices, dynamic full-stack web applications, and problem-solving.
          <br />
          <br />
          Demonstrated problem-solving proficiency with a HackerRank 6th Star Gold Badge and a track record of solving 500+ LeetCode questions.
        </p>
        <div class="flex flex-wrap gap-4 mt-10">
          <a href="mailto:knishant113@gmail.com" class="text-green-400 underline font-bold">LET'S TALK!</a>
          <span class="text-gray-500">•</span>
          <a href="https://www.linkedin.com/in/nishant" target="_blank" rel="noopener noreferrer" class="text-blue-400 underline font-bold">LinkedIn</a>
          <span class="text-gray-500">•</span>
          <a href="https://leetcode.com/NishantTheProgrammer/" target="_blank" rel="noopener noreferrer" class="text-amber-400 underline font-bold">LeetCode (500+)</a>
          <span class="text-gray-500">•</span>
          <a href="https://github.com/NishantTheProgrammer" target="_blank" rel="noopener noreferrer" class="text-gray-300 underline font-bold">GitHub</a>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 mt-16 gap-8 md:gap-16">
          <div class="flex flex-col items-center justify-center">
            <h3 class="text-4xl md:text-6xl font-bold text-emerald-400">6</h3>
            <p class="text-base md:text-lg text-gray-400 font-mono text-center mt-2">Years Experience</p>
          </div>
          <div class="flex flex-col items-center justify-center mt-8 md:mt-0">
            <h3 class="text-4xl md:text-6xl font-bold text-emerald-400">10+</h3>
            <p class="text-base md:text-lg text-gray-400 font-mono text-center mt-2">Production Apps</p>
          </div>
        </div>

      </div>
      <div class="hidden xl:flex h-full w-2/5 justify-end">
        <img src="./../assets/nishant.png" style="filter: drop-shadow(0px 0px 2px black);" alt="Nishant" class="h-full">
      </div>
    </section>

    <section class="min-h-screen grid grid-cols-1 lg:grid-cols-2 p-5 gap-8">
      <div class="flex flex-col justify-center items-center gap-5 md:gap-10 md:p-10">
        <div class="bg-zinc-700 p-5 md:p-10 rounded-xl w-full">
          <h2 class="text-emerald-500 text-xl md:text-3xl font-mono">Backend & Architecture</h2>
          <p class="text-xs md:text-sm text-gray-400 font-mono text-justify mt-3 md:mt-5">
            Developing backend services, designing REST APIs, and implementing microservice-based solutions. Specialized in Node.js, Express.js, Next.js, and system design with database proficiency in MongoDB, PostgreSQL, and MySQL. Currently contributing to sports-related backend services (service-bff-sports) for global clients.
          </p>
          <RouterLink to="projects" class="underline hover:text-emerald-400 mt-3 md:mt-8 block font-mono">View backend projects &rarr;</RouterLink>
        </div>
        <div class="bg-zinc-700 p-5 md:p-10 rounded-xl w-full">
          <h2 class="text-emerald-500 text-xl md:text-3xl font-mono">Frontend & Dynamic UI</h2>
          <p class="text-xs md:text-sm text-gray-400 font-mono text-justify mt-3 md:mt-5">
            Crafting rich user interfaces with React, Angular, and Vue.js. Building dynamic reactive forms, Form.io integrations with advanced validation, geospatial map analytics, and responsive designs using Tailwind CSS, Material UI, and Bootstrap.
          </p>
          <RouterLink to="projects" class="underline hover:text-emerald-400 mt-3 md:mt-8 block font-mono">View full-stack projects &rarr;</RouterLink>
        </div>
      </div>
      <div class="flex justify-center items-center flex-col gap-5 md:gap-8 md:p-10">
        <p class="text-xs md:text-sm text-gray-400 font-mono">Algorithmic Excellence</p>
        <h2 class="text-2xl md:text-4xl font-mono">Problem Solving & DSA</h2>
        <p class="text-lg md:text-xl italic text-amber-400">🏆 HackerRank 6th Star Gold Badge 🏆</p>
        <p class="text-xs md:text-sm text-gray-400 font-mono text-justify mt-3">
          Proven track record of solving 500+ LeetCode questions across data structures and algorithms, including dynamic programming, graphs, trees, and system design optimization.
        </p>
        <div class="flex flex-wrap gap-4 mt-4">
          <a href="https://leetcode.com/NishantTheProgrammer/" target="_blank" rel="noopener noreferrer" class="py-2 px-5 bg-amber-500 text-black font-bold rounded-lg hover:bg-amber-400 text-sm">
            LeetCode (500+ Solved)
          </a>
          <a href="https://www.hackerrank.com/NishantThePro" target="_blank" rel="noopener noreferrer" class="py-2 px-5 border border-emerald-400 text-emerald-400 font-bold rounded-lg hover:bg-zinc-800 text-sm">
            HackerRank 6★ Gold
          </a>
        </div>
      </div>
    </section>

    <section class="px-4 sm:px-8 lg:px-16 xl:px-20 py-10 sm:py-16 lg:py-20">
      <h2 class="text-4xl">Featured Projects</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 justify-center items-center gap-10 mt-10">
        <ProjectCard v-for="project in projects.slice(0, 5)" :key="project.title" :project="project"></ProjectCard>
        <div class="border-emerald-300 border p-10 rounded-xl w-full flex flex-col justify-between h-full">
          <div>
            <h2 class="text-emerald-500 text-3xl font-mono">All Projects</h2>
            <p class="text-sm text-gray-400 font-mono text-justify mt-5">
              Production NGO management platforms, nationwide urban local body finance portals, e-commerce apps, and real-time streaming architectures.
            </p>
          </div>
          <RouterLink to="projects" class="underline text-emerald-400 mt-6 inline-block font-mono font-bold">
            Explore all projects &rarr;
          </RouterLink>
        </div>
      </div>
    </section>

    <section class="p-5 md:p-20">
      <h2 class="text-3xl md:text-4xl lg:text-5xl">Testimonials</h2>
      <p class="text-xs md:text-sm text-gray-400 font-mono text-center md:text-left mt-3 md:mt-5">What clients say about me</p>
      <div class="bg-zinc-900 px-5 md:px-28 py-10 md:py-16 rounded-xl w-full mt-5 md:mt-10">
        <h3 class="text-xs md:text-sm text-gray-400 font-mono text-center md:text-left mt-3 md:mt-5">Firas Serhan & A'laa Waked (Israeli client)</h3>
        <h2 class="text-sm md:text-base lg:text-lg font-mono mt-3 md:mt-5">
          "Nishant is a highly skilled Full-stack Developer with excellent technical expertise and a deep understanding of various programming languages, frameworks, and platforms. His ability to communicate complex technical concepts in an easy-to-understand manner and his dedication to delivering high-quality work on time and on budget make him an excellent choice for any organization seeking a reliable and talented Full-stack Developer."
        </h2>
      </div>
    </section>

    <section class="h-auto md:h-96 p-5 md:p-20">
      <div class="flex flex-col md:flex-row justify-center items-center md:justify-between md:gap-10 mt-5 md:mt-20">
        <div class="md:w-2/3 md:text-left">
          <h2 class="text-lg md:text-3xl lg:text-4xl font-mono text-center md:text-left">Let's make something amazing together</h2>
          <p class="text-base md:text-2xl lg:text-3xl font-mono mt-3 md:mt-5 text-center md:text-left">
            Start by <a href="mailto:knishant113@gmail.com" class="underline text-emerald-400">Saying Hi</a>
          </p>
        </div>
        <div class="md:w-1/3 md:text-left mt-5 md:mt-0">
          <p class="text-xs md:text-base lg:text-lg text-gray-400 font-mono text-center md:text-left">Information</p>
          <p class="text-base md:text-lg lg:text-xl text-gray-400 text-center md:text-left">Ashok Nagar, Delhi - 110093</p>
          <h2 class="text-base md:text-xl lg:text-2xl font-mono text-center md:text-left">knishant113@gmail.com</h2>
          <p class="text-base md:text-lg text-gray-400 text-center md:text-left mt-1">+91 7838716089</p>
        </div>
      </div>
    </section>
  </main>
</template>
