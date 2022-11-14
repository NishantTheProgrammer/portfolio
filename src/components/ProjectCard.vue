<template>
    <div class="shadow-md bg-zinc-700 p-10 rounded-xl w-full">
        <div class="flex justify-between">
            <h2 class="text-emerald-500 text-3xl font-mono">Project name</h2>
            <div>
                <span class="border-amber-300 border text-amber-300 rounded text-xs px-2 py-1 mr-2">tech 1</span>
                <span class="border-amber-300 border text-amber-300 rounded text-xs px-2 py-1 mr-2">tech 2</span>
                <span class="border-amber-300 border text-amber-300 rounded text-xs px-2 py-1 mr-2">tech 3</span>
            </div>
        </div>
        <p class="text-sm text-gray-400 font-mono text-justify mt-5">Lorem ipsum dolor sit, amet consectetur
            adipisicing
            elit.
            Exercitationem voluptates in aut quam nesciunt eum amet inventore</p>
        <RouterLink to="projects" class="underline hover:text-emerald-400 mt-10 block">2 0 projects</RouterLink>
    </div>
</template>