<template>
    <nav class="flex flex-col lg:flex-row lg:justify-between lg:items-center py-5 lg:py-10 px-5 lg:px-20">
        <!-- Logo and Title -->
        <div class="flex justify-between">
            <RouterLink to="/">
                <h1 class="text-2xl mb-0" style="color: white !important;"><span class="font-extrabold">Nishant</span>The<span
                        class="font-extrabold">Programmer</span></h1>
            </RouterLink>
            <button @click="toggleMenu" class="block lg:hidden text-gray-600 focus:outline-none">
                <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
            </button>
        </div>

        <!-- Hamburger Icon -->

        <!-- Navigation Links -->
        <div :class="menuOpen ? 'flex justify-between my-2' : 'hidden flex-col'"
            class="lg:flex  lg:flex-row lg:gap-5 text-sm">
            <RouterLink class="hover:text-emerald-400" to="/"><font-awesome-icon icon="home" /> Home</RouterLink>
            <RouterLink class="hover:text-emerald-400" to="/about"><font-awesome-icon icon="address-card" /> About
            </RouterLink>
            <RouterLink class="hover:text-emerald-400" to="/projects"><font-awesome-icon icon="list-check" /> Project
            </RouterLink>
            <RouterLink class="hover:text-emerald-400" to="/query"><font-awesome-icon icon="clipboard-question" /> Query
            </RouterLink>
        </div>

        <!-- Social Links -->
        <div :class="menuOpen ? 'flex justify-between my-2' : 'hidden flex-col'"
            class="lg:flex  lg:flex-row lg:gap-5 text-sm">
            <a class="hover:text-gray-400" target="_blank" href="https://github.com/NishantTheProgrammer"><font-awesome-icon
                    :icon="['fab', 'github']" /> Github</a>
            <a class="hover:text-blue-400" target="_blank"
                href="https://www.linkedin.com/in/nishanttheprogrammer"><font-awesome-icon :icon="['fab', 'linkedin']" />
                Linkedin</a>
            <a class="hover:text-pink-400" target="_blank"
                href="https://www.instagram.com/nishanttheprogrammer"><font-awesome-icon :icon="['fab', 'instagram']" />
                Instagram</a>
            <a class="hover:text-green-400" target="_blank"
                href="https://wa.me/917838716089?text=Hi%20Nishant%2C%20I%20found%20your%20contact%20at%20nishanttheprogrammer.com%20I%20have%20some%20queries"><font-awesome-icon
                    :icon="['fab', 'whatsapp']" /> WhatsApp</a>
        </div>
    </nav>
</template>
  
<script>
export default {
    data() {
        return {
            menuOpen: false
        };
    },
    methods: {
        toggleMenu() {
            this.menuOpen = !this.menuOpen;
        }
    }
};
</script>
  
<style>/* Add your existing CSS styles here */
/* You may need to adjust these styles based on your design */
/* Ensure appropriate styling for mobile and hamburger icon */</style>
  