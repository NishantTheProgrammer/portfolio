<template>
    <nav class="flex justify-between items-center py-10 px-20">
        <h1 class="text-2xl"><span class="font-extrabold">Nishant</span>The<span class="font-extrabold">Programmer</span></h1>
        <div class="flex gap-5 text-sm">
            <RouterLink class="hover:text-emerald-400" to="/"><font-awesome-icon icon="home" /> Home</RouterLink>
            <RouterLink class="hover:text-emerald-400" to="/about"><font-awesome-icon icon="address-card" /> About</RouterLink>
            <RouterLink class="hover:text-emerald-400" to="/projects"><font-awesome-icon icon="list-check" /> Project</RouterLink>
            <RouterLink class="hover:text-emerald-400" to="/query"><font-awesome-icon icon="clipboard-question" /> Query</RouterLink>
        </div>
        <div class="flex gap-5 text-sm">
            <a class="hover:text-gray-400" target="_blank" href="https://github.com/NishantTheProgrammer"><font-awesome-icon :icon="['fab', 'github']" /> Github</a>
            <a class="hover:text-blue-400" target="_blank" href="https://www.linkedin.com/in/nishanttheprogrammer"><font-awesome-icon :icon="['fab', 'linkedin']" /> Linkedin</a>
            <a class="hover:text-pink-400" target="_blank" href="https://www.instagram.com/nishanttheprogrammer"><font-awesome-icon :icon="['fab', 'instagram']" /> Instagram</a>
            <a class="hover:text-green-400" target="_blank" href="https://wa.me/917838716089?text=Hi%20Nishant%2C%20I%20found%20your%20contact%20at%20nishanttheprogrammer.com%20I%20have%20some%20queries"><font-awesome-icon :icon="['fab', 'whatsapp']" /> WhatsApp</a>
        </div>
    </nav>
</template>