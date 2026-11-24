<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";

const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const closeMenu = () => {
  menuOpen.value = false;
};
</script>

<template>
  <header class="sticky top-0 z-50 backdrop-blur-md bg-[#121417]/90 border-b border-zinc-800/80 transition-all">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <!-- Brand / Logo -->
        <RouterLink to="/" @click="closeMenu" class="group flex items-center gap-2">
          <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span class="text-xl sm:text-2xl font-bold font-mono text-white tracking-tight">
            Nishant<span class="text-emerald-400">TheProgrammer</span>
          </span>
        </RouterLink>

        <!-- Desktop Navigation Links -->
        <nav class="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <RouterLink
            to="/"
            class="transition-colors hover:text-emerald-400 flex items-center gap-2"
            active-class="text-emerald-400 font-semibold"
          >
            <font-awesome-icon icon="home" /> Home
          </RouterLink>
          <RouterLink
            to="/about"
            class="transition-colors hover:text-emerald-400 flex items-center gap-2"
            active-class="text-emerald-400 font-semibold"
          >
            <font-awesome-icon icon="address-card" /> About
          </RouterLink>
          <RouterLink
            to="/projects"
            class="transition-colors hover:text-emerald-400 flex items-center gap-2"
            active-class="text-emerald-400 font-semibold"
          >
            <font-awesome-icon icon="list-check" /> Projects
          </RouterLink>
          <RouterLink
            to="/query"
            class="transition-colors hover:text-emerald-400 flex items-center gap-2"
            active-class="text-emerald-400 font-semibold"
          >
            <font-awesome-icon icon="clipboard-question" /> Contact
          </RouterLink>
        </nav>

        <!-- Desktop Social Actions -->
        <div class="hidden lg:flex items-center gap-5 text-sm">
          <a
            href="https://github.com/NishantTheProgrammer"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-400 hover:text-white transition-colors"
            title="GitHub"
          >
            <font-awesome-icon :icon="['fab', 'github']" class="text-lg" />
          </a>
          <a
            href="https://www.linkedin.com/in/nishant"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-400 hover:text-blue-400 transition-colors"
            title="LinkedIn"
          >
            <font-awesome-icon :icon="['fab', 'linkedin']" class="text-lg" />
          </a>
          <a
            href="https://leetcode.com/NishantTheProgrammer/"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-400 hover:text-amber-400 transition-colors"
            title="LeetCode"
          >
            <font-awesome-icon icon="code" class="text-base" />
          </a>
          <a
            href="https://wa.me/917838716089?text=Hi%20Nishant%2C%20I%20found%20your%20contact%20at%20nishanttheprogrammer.com"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500 hover:text-black transition-all"
          >
            <font-awesome-icon :icon="['fab', 'whatsapp']" /> Let's Chat
          </a>
        </div>

        <!-- Mobile Hamburger Button -->
        <div class="flex md:hidden">
          <button
            @click="toggleMenu"
            type="button"
            class="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            aria-label="Toggle navigation menu"
          >
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="!menuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Dropdown Menu -->
      <transition
        enter-active-class="transition duration-150 ease-out"
        enter-from-class="transform -translate-y-2 opacity-0"
        enter-to-class="transform translate-y-0 opacity-100"
        leave-active-class="transition duration-100 ease-in"
        leave-from-class="transform translate-y-0 opacity-100"
        leave-to-class="transform -translate-y-2 opacity-0"
      >
        <div v-if="menuOpen" class="md:hidden py-4 border-t border-zinc-800 space-y-3 bg-[#121417]">
          <RouterLink
            to="/"
            @click="closeMenu"
            class="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-emerald-400 hover:bg-zinc-800"
            active-class="text-emerald-400 bg-zinc-800 font-semibold"
          >
            <font-awesome-icon icon="home" class="mr-2" /> Home
          </RouterLink>
          <RouterLink
            to="/about"
            @click="closeMenu"
            class="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-emerald-400 hover:bg-zinc-800"
            active-class="text-emerald-400 bg-zinc-800 font-semibold"
          >
            <font-awesome-icon icon="address-card" class="mr-2" /> About
          </RouterLink>
          <RouterLink
            to="/projects"
            @click="closeMenu"
            class="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-emerald-400 hover:bg-zinc-800"
            active-class="text-emerald-400 bg-zinc-800 font-semibold"
          >
            <font-awesome-icon icon="list-check" class="mr-2" /> Projects
          </RouterLink>
          <RouterLink
            to="/query"
            @click="closeMenu"
            class="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-emerald-400 hover:bg-zinc-800"
            active-class="text-emerald-400 bg-zinc-800 font-semibold"
          >
            <font-awesome-icon icon="clipboard-question" class="mr-2" /> Contact
          </RouterLink>

          <!-- Mobile Social Links -->
          <div class="pt-4 border-t border-zinc-800 flex items-center justify-around">
            <a href="https://github.com/NishantTheProgrammer" target="_blank" class="text-gray-400 hover:text-white text-lg">
              <font-awesome-icon :icon="['fab', 'github']" />
            </a>
            <a href="https://www.linkedin.com/in/nishant" target="_blank" class="text-gray-400 hover:text-blue-400 text-lg">
              <font-awesome-icon :icon="['fab', 'linkedin']" />
            </a>
            <a href="https://leetcode.com/NishantTheProgrammer/" target="_blank" class="text-gray-400 hover:text-amber-400 text-lg">
              <font-awesome-icon icon="code" />
            </a>
            <a href="https://wa.me/917838716089" target="_blank" class="text-emerald-400 text-lg">
              <font-awesome-icon :icon="['fab', 'whatsapp']" />
            </a>
          </div>
        </div>
      </transition>
    </div>
  </header>
</template>
