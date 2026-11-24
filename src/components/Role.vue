<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const roles = [
  "Senior Software Engineer",
  "Full Stack Developer",
  "Backend Engineer",
  "Microservices Architect",
  "Problem Solver (500+ LC)",
];

const currentRole = ref("Senior Software Engineer");
let selectedIdx = 0;
let isDeleting = false;
let timer: ReturnType<typeof setInterval> | null = null;

onMounted(() => {
  timer = setInterval(() => {
    const fullText = roles[selectedIdx];
    if (!isDeleting) {
      if (currentRole.value.length < fullText.length) {
        currentRole.value = fullText.slice(0, currentRole.value.length + 1);
      } else {
        isDeleting = true;
      }
    } else {
      if (currentRole.value.length > 0) {
        currentRole.value = currentRole.value.slice(0, currentRole.value.length - 1);
      } else {
        isDeleting = false;
        selectedIdx = (selectedIdx + 1) % roles.length;
      }
    }
  }, 90);
});

onUnmounted(() => {
  if (timer) clearInterval(timer);
});
</script>

<template>
  <span class="inline-flex items-center text-xs sm:text-sm font-mono font-bold py-1.5 px-3 rounded-md bg-emerald-400 text-black shadow-sm tracking-wide">
    {{ currentRole }}<span class="animate-pulse ml-0.5 font-normal">|</span>
  </span>
</template>
