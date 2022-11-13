<script setup lang="ts">
import NavBar from '@/components/NavBar.vue';

</script>

<template>
  <NavBar></NavBar>
  <main>
    <section class=" h-[88vh] flex items-end justify-between px-20">
      <div class="w-3/5 h-full p-40">
        <span class="text-black py-1 px-3 rounded-md bg-green-400">Front end developer</span>
        <h1 class="text-4xl mt-5">Mobile Application developer <br><span class="text-xl">at Max vision solutions PVT. LTD.</span></h1>
        <p class="text-sm text-gray-400 mt-20">I'm one of the best problem solvers. (I have HackerRank’s 5th Star gold badge In problem solving)</p>
        <a href="mailto:knishant113@gmail.com" class="block mt-20 text-green-400 underline font-bold">LET'S TALK!</a>
        <div class="grid grid-cols-2 mt-20">
          <div class="flex gap-3">
            <h3 class="text-6xl">2</h3>
            <p class="text-lg text-gray-400">Years <br>Experience</p>
          </div>
          <div class="flex gap-3">
            <h3 class="text-6xl">18</h3>
            <p class="text-lg text-gray-400">Projects  <br>completed</p>
          </div>
        </div>
      </div>
      <div class="h-full w-2/5 flex justify-end">
        <img src="./../assets/nishant.png" style="filter: drop-shadow(0px 0px 2px black);" alt="Nishant" class="h-full" >
      </div>
    </section>
  </main>
</template>
