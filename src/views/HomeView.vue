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
      <div class="xl:w-3/5 h-full py-40 xl:p-40">
        <Role></Role>
        <h1 class="text-4xl mt-5">Full Stack Developer <br><span class="text-xl">at Dhwani Rural Information Systems PVT.
            LTD.</span></h1>
        <p class="text-sm text-gray-400 mt-20 font-mono">I'm a curious tech guy with a passion for unraveling complex
          challenges. With a track record of developing over 10 successful applications for companies, I've honed my
          technical prowess to a fine art.
          <br />
          <br />

          I proudly sport HackerRank's coveted 6th Star gold badge in problem- solving. This is a testament to my ability
          to dissect and conquer even the most intricate of problems.
        </p>
        <a href="mailto:knishant113@gmail.com" class="block mt-20 text-green-400 underline font-bold">LET'S TALK!</a>
        <div class="grid grid-cols-2 mt-20">
          <div class="flex gap-3 items-center">
            <h3 class="text-6xl">3</h3>
            <p class="text-lg text-gray-400 font-mono">Years <br>Experience</p>
          </div>
          <div class="flex gap-3 items-center">
            <h3 class="text-6xl">10+</h3>
            <p class="text-lg text-gray-400 font-mono">Projects <br>completed</p>
          </div>
        </div>
      </div>
      <div class="hidden xl:flex h-full w-2/5 justify-end">
        <img src="./../assets/nishant.png" style="filter: drop-shadow(0px 0px 2px black);" alt="Nishant" class="h-full">
      </div>
    </section>
    <section class="min-h-screen grid grid-cols-1 lg:grid-cols-2 p-5 ">
      <div class="flex flex-col justify-center items-center gap-5 md:gap-10  md:p-20">
        <div class="bg-zinc-700 p-5 md:p-10 rounded-xl w-full">
          <h2 class="text-emerald-500 text-xl md:text-3xl font-mono">Front End</h2>
          <p class="text-xs md:text-sm text-gray-400 font-mono text-justify mt-3 md:mt-5">Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Exercitationem voluptates in aut quam nesciunt eum amet inventore</p>
          <a href="projects" class="underline hover:text-emerald-400 mt-3 md:mt-10 block">20 projects</a>
        </div>
        <div class="bg-zinc-700 p-5 md:p-10 rounded-xl w-full">
          <h2 class="text-emerald-500 text-xl md:text-3xl font-mono">Back End</h2>
          <p class="text-xs md:text-sm text-gray-400 font-mono text-justify mt-3 md:mt-5">Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Exercitationem voluptates in aut quam nesciunt eum amet inventore</p>
          <a href="projects" class="underline hover:text-emerald-400 mt-3 md:mt-10 block">10 projects</a>
        </div>
      </div>
      <div class="flex justify-center items-center flex-col gap-5 md:gap-10 md:p-20">
        <p class="text-xs md:text-sm text-gray-400 font-mono">Introduction</p>
        <h2 class="text-2xl md:text-4xl font-mono">Hello! I'm Nishant</h2>
        <p class="text-lg md:text-xl italic">Every flsfjls</p>
        <p class="text-xs md:text-sm text-gray-400 font-mono text-justify mt-3 md:mt-5">Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Exercitationem voluptates in aut quam nesciunt eum amet inventore earum incidunt
          eligendi obcaecati labore molestiae, consequuntur quo, sunt aliquam modi eveniet possimus adipisci magni id
          porro. Tempora eligendi eos iste consectetur, eius magni voluptatum quibusdam sed! Expedita quaerat obcaecati
          nobis aliquid magnam?</p>
      </div>
    </section>


    <section class="px-4 sm:px-8 lg:px-16 xl:px-20 py-10 sm:py-16 lg:py-20">
      <h2 class="text-4xl">Latest works</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 justify-center items-center gap-10 mt-10">
        <ProjectCard v-for="project in projects.slice(0, 5)" :project="project"></ProjectCard>
        <div class=" border-emerald-300 border p-10 rounded-xl w-full">
          <h2 class="text-emerald-500 text-3xl font-mono">All Projects</h2>
          <p class="text-sm text-gray-400 font-mono text-justify mt-5">* Some projects are not allow to be published by
            NDA. If you want to see more, <RouterLink to="projects" class="underline text-emerald-400">Contact
            </RouterLink>
          </p>
          <p class="mt-10 opacity-0">.</p>
        </div>
      </div>
    </section>
    <section class="min-h-screen p-5 md:p-20">
      <h2 class="text-3xl md:text-4xl lg:text-5xl">Testimonials</h2>
      <p class="text-xs md:text-sm text-gray-400 font-mono text-center md:text-left mt-3 md:mt-5">What clients say about
        me</p>
      <div class="bg-zinc-900 px-5 md:px-28 py-10 md:py-16 rounded-xl w-full mt-5 md:mt-10">
        <h3 class="text-xs md:text-sm text-gray-400 font-mono text-center md:text-left mt-3 md:mt-5">Firas Serhan & A'laa
          Waked (Israeli client)</h3>
        <h2 class="text-sm md:text-base lg:text-lg font-mono mt-3 md:mt-5">Nishant is a highly skilled Full-stack
          Developer with excellent technical expertise and a deep understanding of various programming languages,
          frameworks, and platforms. His ability to communicate complex technical concepts in an easy-to-understand manner
          and his dedication to delivering high-quality work on time and on budget make him an excellent choice for any
          organization seeking a reliable and talented Full-stack Developer.</h2>
      </div>
    </section>
    <section class="h-auto md:h-96 p-5 md:p-20">
      <div class="flex flex-col md:flex-row justify-center items-center md:justify-between md:gap-10 mt-5 md:mt-20">
        <div class="md:w-2/3 md:text-left">
          <h2 class="text-lg md:text-3xl lg:text-4xl font-mono text-center md:text-left">Let's make something amazing
            together</h2>
          <p class="text-base md:text-2xl lg:text-3xl font-mono mt-3 md:mt-5 text-center md:text-left">Start by <a
              href="/projects" class="underline text-emerald-400">Saying Hi</a></p>
        </div>
        <div class="md:w-1/3 md:text-left mt-5 md:mt-0">
          <p class="text-xs md:text-base lg:text-lg text-gray-400 font-mono text-center md:text-left">Information</p>
          <p class="text-base md:text-lg lg:text-xl text-gray-400 text-center md:text-left">Delhi, India</p>
          <h2 class="text-base md:text-xl lg:text-2xl font-mono text-center md:text-left">knishant113@gmail.com</h2>
        </div>
      </div>
    </section>



  </main>
</template>
