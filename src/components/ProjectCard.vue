<script lang="ts">
export default {
    props: ['project'],
}
</script>

<template>
    <div class="shadow-md bg-zinc-700 p-6 md:p-10 rounded-xl w-full md:max-w-lg lg:max-w-xl xl:max-w-2xl flex flex-col">
        <h2 class="text-emerald-500 text-xl md:text-2xl lg:text-3xl font-mono">{{ project.title }}</h2>
        <div class="flex flex-wrap gap-2 mt-2">
            <span class="border-amber-300 border text-amber-300 rounded text-xs px-2 py-1"
                v-for="technology in project.technologies">{{ technology }}</span>
        </div>
        <p class="text-sm text-gray-400 font-mono text-justify mt-5">{{ project.description }}</p>
        <RouterLink to="projects" class="underline hover:text-emerald-400 mt-auto">20 projects</RouterLink>
    </div>
</template>