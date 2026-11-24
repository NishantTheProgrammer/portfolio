<script setup lang="ts">
import NavBar from '@/components/NavBar.vue';
import ProjectCard from '@/components/ProjectCard.vue';
import Role from '@/components/Role.vue';
import { useProjectsStore } from '@/stores/project';
import nishantImg from '@/assets/nishant.png';

const { projects } = useProjectsStore();
</script>

<template>
  <NavBar />

  <main class="flex-1">
    <!-- Hero Section -->
    <section class="relative overflow-hidden py-12 md:py-20 lg:py-24 border-b border-zinc-800/80">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <!-- Hero Text -->
          <div class="lg:col-span-7 space-y-6">
            <div>
              <Role />
            </div>

            <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-mono tracking-tight text-white leading-tight">
              Senior Software Engineer
              <span class="block text-xl sm:text-2xl md:text-3xl font-medium text-emerald-400 mt-2 font-sans">
                at To The New (TTN)
              </span>
            </h1>

            <p class="text-base sm:text-lg text-gray-300 font-mono leading-relaxed text-justify max-w-2xl">
              Delivering scalable enterprise applications across diverse domains with <span class="text-white font-semibold">6 years of experience</span>. Specialized in Node.js, TypeScript, Next.js, and microservices architecture, backed by a proven track record of solving <span class="text-amber-400 font-semibold">500+ LeetCode questions</span> and holding a <span class="text-amber-400 font-semibold">HackerRank 6th Star Gold Badge</span>.
            </p>

            <!-- Action Buttons -->
            <div class="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="mailto:knishant113@gmail.com"
                class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-sm tracking-wide transition-all shadow-lg shadow-emerald-500/20"
              >
                <span>Let's Talk</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>

              <RouterLink
                to="/projects"
                class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-semibold text-sm border border-zinc-700 transition-colors"
              >
                <span>View Projects</span>
              </RouterLink>

              <a
                href="https://www.linkedin.com/in/nishant"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-blue-400 border border-zinc-800 text-sm font-semibold transition-colors"
              >
                <font-awesome-icon :icon="['fab', 'linkedin']" />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://leetcode.com/NishantTheProgrammer/"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-amber-400 border border-zinc-800 text-sm font-semibold transition-colors"
              >
                <font-awesome-icon icon="code" />
                <span>500+ Solved</span>
              </a>
            </div>

            <!-- Metrics Counter Strip -->
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-zinc-800/80">
              <div class="bg-zinc-900/60 border border-zinc-800 p-4 rounded-xl text-center">
                <span class="block text-3xl sm:text-4xl font-extrabold text-emerald-400 font-mono">6+</span>
                <span class="text-xs text-gray-400 font-mono uppercase tracking-wider mt-1 block">Years Exp.</span>
              </div>
              <div class="bg-zinc-900/60 border border-zinc-800 p-4 rounded-xl text-center">
                <span class="block text-3xl sm:text-4xl font-extrabold text-emerald-400 font-mono">10+</span>
                <span class="text-xs text-gray-400 font-mono uppercase tracking-wider mt-1 block">Production Apps</span>
              </div>
              <div class="bg-zinc-900/60 border border-zinc-800 p-4 rounded-xl text-center">
                <span class="block text-3xl sm:text-4xl font-extrabold text-amber-400 font-mono">500+</span>
                <span class="text-xs text-gray-400 font-mono uppercase tracking-wider mt-1 block">LeetCode Solved</span>
              </div>
              <div class="bg-zinc-900/60 border border-zinc-800 p-4 rounded-xl text-center">
                <span class="block text-3xl sm:text-4xl font-extrabold text-amber-400 font-mono">6★</span>
                <span class="text-xs text-gray-400 font-mono uppercase tracking-wider mt-1 block">HackerRank Gold</span>
              </div>
            </div>
          </div>

          <!-- Hero Image -->
          <div class="lg:col-span-5 flex justify-center lg:justify-end">
            <div class="relative w-64 sm:w-80 md:w-96 max-w-full">
              <!-- Glow background -->
              <div class="absolute -inset-4 bg-gradient-to-tr from-emerald-500/20 to-amber-500/10 rounded-3xl blur-2xl opacity-70"></div>
              <!-- Image card -->
              <div class="relative rounded-2xl overflow-hidden border border-zinc-700/80 bg-zinc-800/50 shadow-2xl">
                <img
                  :src="nishantImg"
                  alt="Nishant - Senior Software Engineer"
                  class="w-full h-auto object-cover object-top hover:scale-105 transition-transform duration-500"
                />
                <div class="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                  <p class="text-white font-bold text-sm font-mono">Nishant</p>
                  <p class="text-xs text-emerald-400 font-mono">Senior Software Engineer @ TTN</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Core Specializations -->
    <section class="py-16 md:py-24 border-b border-zinc-800/80">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <span class="text-xs uppercase font-mono tracking-widest text-emerald-400 font-bold">What I Bring to the Table</span>
          <h2 class="text-3xl sm:text-4xl font-extrabold font-mono text-white mt-2">Core Engineering Disciplines</h2>
          <p class="text-gray-400 text-sm sm:text-base mt-3">From high-throughput backend services to intuitive frontends and rigorous problem solving.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Backend & Architecture -->
          <div class="bg-zinc-800/60 border border-zinc-700/70 hover:border-emerald-500/50 rounded-2xl p-8 transition-all duration-300 shadow-lg flex flex-col justify-between">
            <div>
              <div class="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 text-xl mb-6">
                <font-awesome-icon icon="server" />
              </div>
              <h3 class="text-xl font-bold font-mono text-white">Backend & Architecture</h3>
              <p class="text-sm text-gray-300 font-mono mt-4 leading-relaxed text-justify">
                Designing distributed microservices, REST APIs, and database models with Node.js, Express, Next.js, MongoDB, PostgreSQL, and MySQL. Experienced in system design, materialized views, query optimizations, and secure payment/video integrations.
              </p>
            </div>
            <div class="mt-8 pt-4 border-t border-zinc-700/50 flex flex-wrap gap-2">
              <span class="text-xs font-mono py-1 px-2.5 rounded bg-zinc-900 text-emerald-400">Node.js</span>
              <span class="text-xs font-mono py-1 px-2.5 rounded bg-zinc-900 text-emerald-400">Microservices</span>
              <span class="text-xs font-mono py-1 px-2.5 rounded bg-zinc-900 text-emerald-400">PostgreSQL</span>
            </div>
          </div>

          <!-- Frontend & Dynamic UI -->
          <div class="bg-zinc-800/60 border border-zinc-700/70 hover:border-emerald-500/50 rounded-2xl p-8 transition-all duration-300 shadow-lg flex flex-col justify-between">
            <div>
              <div class="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 text-xl mb-6">
                <font-awesome-icon :icon="['fab', 'react']" />
              </div>
              <h3 class="text-xl font-bold font-mono text-white">Frontend & UI Engineering</h3>
              <p class="text-sm text-gray-300 font-mono mt-4 leading-relaxed text-justify">
                Building responsive, accessible web applications using TypeScript, React, Angular, and Vue.js. Expert in complex reactive form architectures, Form.io dynamic wizards, GIS map integrations, and modern CSS frameworks like Tailwind and Material UI.
              </p>
            </div>
            <div class="mt-8 pt-4 border-t border-zinc-700/50 flex flex-wrap gap-2">
              <span class="text-xs font-mono py-1 px-2.5 rounded bg-zinc-900 text-blue-400">TypeScript</span>
              <span class="text-xs font-mono py-1 px-2.5 rounded bg-zinc-900 text-blue-400">React / Angular</span>
              <span class="text-xs font-mono py-1 px-2.5 rounded bg-zinc-900 text-blue-400">Tailwind</span>
            </div>
          </div>

          <!-- Problem Solving & DSA -->
          <div class="bg-zinc-800/60 border border-zinc-700/70 hover:border-emerald-500/50 rounded-2xl p-8 transition-all duration-300 shadow-lg flex flex-col justify-between">
            <div>
              <div class="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 text-xl mb-6">
                <font-awesome-icon icon="code" />
              </div>
              <h3 class="text-xl font-bold font-mono text-white">Problem Solving & DSA</h3>
              <p class="text-sm text-gray-300 font-mono mt-4 leading-relaxed text-justify">
                HackerRank 6th Star Gold Badge recipient with 500+ LeetCode problems solved. Deep understanding of algorithmic complexity, data structures (graphs, trees, DP), and writing clean, scalable production code.
              </p>
            </div>
            <div class="mt-8 pt-4 border-t border-zinc-700/50 flex flex-wrap gap-2">
              <span class="text-xs font-mono py-1 px-2.5 rounded bg-zinc-900 text-amber-400">500+ LeetCode</span>
              <span class="text-xs font-mono py-1 px-2.5 rounded bg-zinc-900 text-amber-400">6★ HackerRank</span>
              <span class="text-xs font-mono py-1 px-2.5 rounded bg-zinc-900 text-amber-400">GenAI / RAG</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Projects Preview -->
    <section class="py-16 md:py-24 border-b border-zinc-800/80">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span class="text-xs uppercase font-mono tracking-widest text-emerald-400 font-bold">Portfolio</span>
            <h2 class="text-3xl sm:text-4xl font-extrabold font-mono text-white mt-1">Featured Production Projects</h2>
          </div>
          <RouterLink
            to="/projects"
            class="inline-flex items-center gap-2 text-sm font-mono font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            <span>View All Projects</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </RouterLink>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProjectCard
            v-for="project in projects.slice(0, 4)"
            :key="project.title"
            :project="project"
          />
        </div>
      </div>
    </section>

    <!-- Client Testimonial -->
    <section class="py-16 md:py-20 border-b border-zinc-800/80 bg-zinc-900/40">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="inline-flex p-3 rounded-full bg-emerald-500/10 text-emerald-400 mb-6">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>
        <blockquote class="text-lg sm:text-xl font-mono text-gray-200 leading-relaxed italic">
          "Nishant is a highly skilled Full-stack Developer with excellent technical expertise and a deep understanding of various programming languages, frameworks, and platforms. His ability to communicate complex technical concepts in an easy-to-understand manner and his dedication to delivering high-quality work on time make him an exceptional engineer."
        </blockquote>
        <div class="mt-6">
          <p class="font-bold font-mono text-emerald-400">Firas Serhan & A'laa Waked</p>
          <p class="text-xs text-gray-400 font-mono">International Client • Israeli E-Commerce Web Platform</p>
        </div>
      </div>
    </section>

    <!-- CTA & Contact Footer -->
    <section class="py-16 md:py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-gradient-to-r from-zinc-800 via-zinc-800/80 to-zinc-900 border border-zinc-700/80 rounded-3xl p-8 sm:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div class="space-y-3 text-center md:text-left">
            <span class="text-xs uppercase font-mono tracking-wider text-emerald-400 font-bold">Open for Opportunities</span>
            <h2 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-mono text-white">Let's Build Something Scalable Together</h2>
            <p class="text-gray-300 text-sm sm:text-base font-mono max-w-xl">
              Currently exploring senior engineering roles. Let's discuss backend architectures, full-stack systems, or consulting opportunities.
            </p>
          </div>

          <div class="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="mailto:knishant113@gmail.com"
              class="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-sm text-center tracking-wide transition-all shadow-lg"
            >
              knishant113@gmail.com
            </a>
            <RouterLink
              to="/query"
              class="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-700 text-white font-semibold text-sm text-center border border-zinc-600 transition-colors"
            >
              Contact Form
            </RouterLink>
          </div>
        </div>

        <!-- Footer Bottom Line -->
        <div class="mt-12 pt-8 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-400">
          <p>© 2026 Nishant (NishantTheProgrammer). Built with Vue 3, Vite & Tailwind CSS.</p>
          <div class="flex items-center gap-6">
            <a href="https://github.com/NishantTheProgrammer" target="_blank" class="hover:text-white transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/nishant" target="_blank" class="hover:text-white transition-colors">LinkedIn</a>
            <a href="https://leetcode.com/NishantTheProgrammer/" target="_blank" class="hover:text-white transition-colors">LeetCode</a>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
