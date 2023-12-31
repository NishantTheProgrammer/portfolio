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
        <p class="text-sm text-gray-400 font-mono text-justify mt-2">{{ project.description }}</p>
        <div class="flex mt-5 gap-3">
            <a v-if="project.sourceCode" :href="project.sourceCode" target="_blank" rel="noopener noreferrer"
                class="py-1 px-2 lg:py-1 lg:px-3 text-sm font-medium text-center text-white rounded-lg bg-green-400 sm:w-fit hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 border-2 border-green-400">
                Source Code
            </a>
            <a v-if="project.hosted" :href="project.hosted" target="_blank" rel="noopener noreferrer"
                class="py-1 px-2 lg:py-1 lg:px-3 text-sm font-medium text-center text-white rounded-lg bg-green-400 sm:w-fit hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 border-2 border-green-400">
                Hosting
            </a>
        </div>
    </div>
</template>