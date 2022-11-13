<template>
    <nav class="flex justify-between items-center py-10 px-20">
        <h1 class="text-2xl"><span class="font-extrabold">Nishant</span>The<span class="font-extrabold">Programmer</span></h1>
        <div class="flex gap-5 text-sm">
            <RouterLink to="/"><font-awesome-icon icon="home" /> Home</RouterLink>
            <RouterLink to="/about"><font-awesome-icon icon="address-card" /> About</RouterLink>
            <RouterLink to="/project"><font-awesome-icon icon="list-check" /> Project</RouterLink>
            <RouterLink to="/query"><font-awesome-icon icon="clipboard-question" /> Query</RouterLink>
        </div>
        <div class="flex gap-5 text-sm">
            <a target="_blank" href="https://github.com/NishantTheProgrammer"><font-awesome-icon :icon="['fab', 'github']" /> Github</a>
            <a target="_blank" href="https://www.linkedin.com/in/nishanttheprogrammer"><font-awesome-icon :icon="['fab', 'linkedin']" /> Linkedin</a>
            <a target="_blank" href="https://www.instagram.com/nishanttheprogrammer"><font-awesome-icon :icon="['fab', 'instagram']" /> Instagram</a>
            <a target="_blank" href="https://wa.me/917838716089?text=Hi%20Nishant%2C%20I%20found%20your%20contact%20at%20nishanttheprogrammer.com%20I%20have%20some%20queries"><font-awesome-icon :icon="['fab', 'whatsapp']" /> WhatsApp</a>
        </div>
    </nav>
</template>