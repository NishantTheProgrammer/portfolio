<script setup lang="ts">
import NavBar from '@/components/NavBar.vue';
</script>

<script lang="ts">
export default {
  data() {
    return {
      skills: [
        {
          technology: 'HTML',
          percent: 80,
          color: '#de4b25',
          icon: 'fab fa-html5'
        },
        {
          technology: 'CSS',
          percent: 75,
          color: '#3596d0',
          icon: 'fab fa-css3-alt'
        },
        {
          technology: 'JavaScript',
          percent: 90,
          color: '#f0d91d',
          icon: 'fab fa-js-square',
          frameworks: [
            { title: 'React JS', icon: 'fab fa-react', color: '#15aabf' },
            { title: 'Vue JS', icon: 'fab fa-vuejs', color: '#35b741' }
          ]
        },
        {
          technology: 'Python',
          percent: 85,
          color: '#4894c3',
          icon: 'fab fa-python',
          frameworks: [
            { title: 'Django', icon: 'fab fa-dyalog', color: 'white' },
          ]
        },
        {
          technology: 'SQL',
          percent: 70,
          color: '#27efff',
          icon: 'fas fa-database'
        },
        {
          technology: 'Linux',
          percent: 55,
          color: '#cf7a0a',
          icon: 'fa fa-linux'
        },
        {
          technology: 'PHP',
          percent: 85,
          color: '#8993be',
          icon: 'fab fa-php',
          frameworks: [{ title: 'Laravel', icon: 'fab fa-laravel', color: 'red' }]
        },
        {
          technology: 'Bootstrap',
          percent: 65,
          color: '#543b79',
          icon: 'fab fa-bootstrap'
        },
        {
          technology: 'Java',
          percent: 80,
          color: '#e61f24',
          icon: 'fab fa-java'
        },
        {
          technology: 'C Language',
          percent: 75,
          color: '#cdc6c6',
          icon: 'fab fa-cuttlefish'
        },
        {
          technology: 'Photoshop',
          percent: 60,
          color: '#0f5367',
          icon: 'fab fa-adobe'
        },
        {
          technology: 'Illustrator',
          percent: 60,
          color: '#ed6c1f',
          icon: 'fab fa-adobe'
        },
        {
          technology: 'Blender',
          percent: 50,
          color: '#f86d20',
          icon: 'fab fa-css3-alt'
        },
        {
          technology: 'Unity',
          percent: 30,
          color: '#9428b2',
          icon: 'fab fa-unity'
        }
      ]
    }
  },
}
</script>


<style>
.skill {
  background-color: #1d212299;
  height: 320px;
  width: 240px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
}

.skill svg {
  width: 150px;
}

svg circle {
  fill: none;
  stroke: yellow;
  stroke-width: 10;
  stroke-linecap: round;

  transform: translate(5px, 5px);
  stroke-dasharray: 220;
  stroke-dashoffset: 220;
}

.skill .skillName {
  font-size: 22px;
  font-weight: bold;
}

.skill .percent {
  position: relative;
  top: -90px;
  font-size: 20px;
}

.skill .framework {
  background-color: black;
  border-radius: 20px;
  font-size: 1.5em;
  width: 80%;
  margin: 10px;
  display: flex;
  justify-content: center;
}

.skill .framework i {
  margin: 10px;
}

.circle {
  stroke-dasharray: 440
}
</style>

<template>
  <NavBar></NavBar>
  <main>
    <section class="p-20">
      <h2 class="text-4xl">About</h2>
      <div class="grid grid-cols-4 justify-center items-center gap-10 mt-10">

        <div v-for="skill in skills" :key="skill.technology" class="bg-neutral-700 rounded-md p-5 skill">
          <svg>
            <circle class="circle"
              :style="{ strokeDashoffset: `calc(440 - (440 * ${skill.percent}) / 100)`, stroke: skill.color }" cx="70"
              cy="70" r="70">
            </circle>
          </svg>
          <span class="percent">{{ skill.percent }}%</span>
          <p class="text-center skillName">{{ skill.technology }}</p>
          <div class="framework">
            <i v-for="framework in skill.frameworks" :title="framework.title" class="icon"
              :style="{ color: framework.color }"></i>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
