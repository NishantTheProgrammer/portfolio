<script setup lang="ts">
import type { Project } from "@/types";

defineProps<{
  project: Project;
}>();
</script>

<template>
  <div class="h-full flex flex-col justify-between bg-zinc-800/80 hover:bg-zinc-800 border border-zinc-700/60 hover:border-emerald-500/40 rounded-2xl p-6 sm:p-8 transition-all duration-300 shadow-lg group">
    <div>
      <!-- Header / Title -->
      <div class="flex items-start justify-between gap-4">
        <h3 class="text-xl sm:text-2xl font-bold font-mono text-emerald-400 group-hover:text-emerald-300 transition-colors">
          {{ project.title }}
        </h3>
        <span v-if="project.featured" class="text-[10px] uppercase tracking-wider font-mono font-bold py-0.5 px-2 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 rounded-full">
          Featured
        </span>
      </div>

      <!-- Tech Stack Badges -->
      <div class="flex flex-wrap gap-1.5 mt-3">
        <span
          v-for="tech in project.technologies"
          :key="tech"
          class="text-xs font-mono font-medium py-1 px-2.5 rounded-md bg-zinc-900/90 text-amber-300/90 border border-amber-500/20"
        >
          {{ tech }}
        </span>
      </div>

      <!-- Description -->
      <p class="text-sm text-gray-300 font-mono mt-4 leading-relaxed text-justify">
        {{ project.description }}
      </p>
    </div>

    <!-- Action Buttons -->
    <div class="flex flex-wrap items-center gap-3 mt-6 pt-4 border-t border-zinc-700/50">
      <a
        v-if="project.hosted"
        :href="project.hosted"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-2 py-2 px-4 text-xs sm:text-sm font-semibold rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black transition-colors shadow-sm"
      >
        <span>Live Demo</span>
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>

      <a
        v-if="project.sourceCode"
        :href="project.sourceCode"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-2 py-2 px-4 text-xs sm:text-sm font-semibold rounded-lg bg-zinc-900 hover:bg-zinc-700 text-gray-200 border border-zinc-700 hover:border-zinc-500 transition-colors"
      >
        <font-awesome-icon :icon="['fab', 'github']" />
        <span>Source Code</span>
      </a>
    </div>
  </div>
</template>
