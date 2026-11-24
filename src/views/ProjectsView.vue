<script setup lang="ts">
import { ref, computed } from "vue";
import NavBar from '@/components/NavBar.vue';
import ProjectCard from '@/components/ProjectCard.vue';
import { useProjectsStore } from '@/stores/project';

const { projects } = useProjectsStore();

const activeFilter = ref<'all' | 'fullstack' | 'backend' | 'frontend' | 'mobile'>('all');

const filteredProjects = computed(() => {
  if (activeFilter.value === 'all') {
    return projects;
  }
  return projects.filter(p => p.category === activeFilter.value);
});
</script>

<template>
  <NavBar />

  <main class="flex-1 py-12 md:py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      <!-- Projects Header -->
      <div class="text-center max-w-3xl mx-auto space-y-3">
        <span class="text-xs uppercase font-mono tracking-widest text-emerald-400 font-bold">Portfolio</span>
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold font-mono text-white">Featured Projects</h1>
        <p class="text-gray-300 font-mono text-sm sm:text-base leading-relaxed">
          A showcase of enterprise applications, scalable microservices, dynamic reactive systems, and open-source contributions.
        </p>

        <!-- Category Filters -->
        <div class="flex flex-wrap items-center justify-center gap-2 pt-6">
          <button
            @click="activeFilter = 'all'"
            :class="activeFilter === 'all' ? 'bg-emerald-500 text-black font-bold' : 'bg-zinc-800 text-gray-300 hover:bg-zinc-700'"
            class="px-4 py-2 rounded-xl text-xs sm:text-sm font-mono transition-all"
          >
            All ({{ projects.length }})
          </button>
          <button
            @click="activeFilter = 'fullstack'"
            :class="activeFilter === 'fullstack' ? 'bg-emerald-500 text-black font-bold' : 'bg-zinc-800 text-gray-300 hover:bg-zinc-700'"
            class="px-4 py-2 rounded-xl text-xs sm:text-sm font-mono transition-all"
          >
            Full Stack
          </button>
          <button
            @click="activeFilter = 'backend'"
            :class="activeFilter === 'backend' ? 'bg-emerald-500 text-black font-bold' : 'bg-zinc-800 text-gray-300 hover:bg-zinc-700'"
            class="px-4 py-2 rounded-xl text-xs sm:text-sm font-mono transition-all"
          >
            Backend & APIs
          </button>
          <button
            @click="activeFilter = 'frontend'"
            :class="activeFilter === 'frontend' ? 'bg-emerald-500 text-black font-bold' : 'bg-zinc-800 text-gray-300 hover:bg-zinc-700'"
            class="px-4 py-2 rounded-xl text-xs sm:text-sm font-mono transition-all"
          >
            Frontend
          </button>
          <button
            @click="activeFilter = 'mobile'"
            :class="activeFilter === 'mobile' ? 'bg-emerald-500 text-black font-bold' : 'bg-zinc-800 text-gray-300 hover:bg-zinc-700'"
            class="px-4 py-2 rounded-xl text-xs sm:text-sm font-mono transition-all"
          >
            Mobile & Real-time
          </button>
        </div>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ProjectCard
          v-for="project in filteredProjects"
          :key="project.title"
          :project="project"
        />
      </div>

      <!-- Bottom Note on Enterprise NDAs -->
      <div class="p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800 text-center max-w-2xl mx-auto space-y-2">
        <p class="text-xs sm:text-sm text-gray-400 font-mono">
          * Proprietary enterprise repositories (such as TabCorp backend services) are protected by NDAs and cannot be linked directly. Full architecture designs can be discussed in technical interviews.
        </p>
      </div>

    </div>
  </main>
</template>
