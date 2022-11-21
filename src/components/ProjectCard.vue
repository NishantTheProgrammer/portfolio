<script lang="ts">
export default {
    props: ['project'],
}
</script>

<template>
    <div class="shadow-md bg-zinc-700 p-10 rounded-xl w-full">
        <div class="flex justify-between">
            <h2 class="text-emerald-500 text-3xl font-mono">{{ project.title }}</h2>
            <div>
                <span class="border-amber-300 border text-amber-300 rounded text-xs px-2 py-1 mr-2" v-for="technology in project.technologies">{{ technology }}</span>
            </div>
        </div>
        <p class="text-sm text-gray-400 font-mono text-justify mt-5">{{ project.description }}</p>
        <RouterLink to="projects" class="underline hover:text-emerald-400 mt-10 block">2 0 projects</RouterLink>
    </div>
</template>