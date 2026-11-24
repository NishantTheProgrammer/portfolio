<script setup lang="ts">
import NavBar from '@/components/NavBar.vue';
</script>

<script lang="ts">
export default {
  data() {
    return {
      experiences: [
        {
          company: "To The New (TTN)",
          period: "Dec 2025 – Present",
          role: "Senior Software Engineer",
          description: "Technology consulting company providing digital transformation and software engineering solutions to global enterprises.",
          highlights: [
            "Developing backend services, designing REST APIs, and implementing microservice-based architectures for global enterprise clients.",
            "TabCorp: Working on sports-related backend services using Node.js, contributing to the service-bff-sports application. Developed featured sports endpoints, defined API contracts, and enhanced backend functionalities for sports platform integrations."
          ]
        },
        {
          company: "Dhwani Rural Information Systems",
          period: "Jan 2023 – Dec 2025",
          role: "SDE-2 Full Stack",
          description: "Technology-driven social impact venture that enables development sector organizations to track and monitor projects effectively.",
          highlights: [
            "Conducted technical interviews, mentored junior developers, developed REST APIs, and reviewed pull requests.",
            "Indian Partner Network: Designed and developed a comprehensive full-stack NGO management platform with Node.js/Express backend and modern Angular frontend. Integrated Form.io dynamic assessments, SendGrid email automation with calendar synchronization, Amplitude tracking, dynamic CMS, and materialized views.",
            "City Finance: Developed complex reactive forms, integrated GIS map boundaries, implemented Google Analytics, and built high-volume bulk upload services handling financial data for 4,000+ urban local bodies."
          ]
        },
        {
          company: "Max Vision Solutions Pvt. Ltd.",
          period: "Mar 2021 – Dec 2022",
          role: "Mobile Application Developer",
          description: "Global web and mobile application engineering services company.",
          highlights: [
            "UI development, API integration, testing, deployment, and security implementation.",
            "getlivecoach.com & mobile app: One-to-one video call coaching platform; integrated Stripe payment gateway, Twilio APIs for video, push notifications, and deep linking.",
            "Link Locality: Social networking platform built with Ionic; implemented OTP verification, Google/Facebook login, geolocation, and social sharing.",
            "pay.mesa-qr.com: Multi-vendor restaurant web application with Stripe split payments, QR code generation, and responsive layouts.",
            "Kichi-Mall & In1Mall: E-commerce applications utilizing WordPress, WooCommerce REST API, Ionic, and Angular."
          ]
        }
      ],
      education: [
        {
          degree: "Master in Computer Applications (MCA)",
          institution: "IGNOU",
          year: "2023",
          description: "Advanced coursework in distributed systems, database design, software engineering methodologies, and scalable application architectures."
        },
        {
          degree: "Bachelor in Computer Application (BCA)",
          institution: "IGNOU",
          year: "2020",
          description: "Foundational computer science degree in data structures, algorithms, object-oriented programming, and web technologies."
        }
      ],
      skills: [
        {
          technology: 'Node.js',
          percent: 95,
          color: '#339933',
          icon: 'fab fa-node-js',
          frameworks: [
            { title: 'Express.js', icon: 'fas fa-server', color: '#ffffff' }
          ]
        },
        {
          technology: 'TypeScript & JS',
          percent: 95,
          color: '#3178c6',
          icon: 'fab fa-js-square',
          frameworks: [
            { title: 'React JS', icon: 'fab fa-react', color: '#15aabf' },
            { title: 'Angular', icon: 'fab fa-angular', color: '#dd0031' },
            { title: 'Vue JS', icon: 'fab fa-vuejs', color: '#35b741' }
          ]
        },
        {
          technology: 'Microservices',
          percent: 90,
          color: '#ffb400',
          icon: 'fas fa-network-wired',
          frameworks: [
            { title: 'System Design', icon: 'fas fa-server', color: '#ffb400' }
          ]
        },
        {
          technology: 'Databases',
          percent: 90,
          color: '#47a248',
          icon: 'fas fa-database',
          frameworks: [
            { title: 'SQL', icon: 'fas fa-database', color: '#336791' }
          ]
        },
        {
          technology: 'Gen AI & RAG',
          percent: 85,
          color: '#8a2be2',
          icon: 'fas fa-brain',
          frameworks: [
            { title: 'Agentic AI', icon: 'fas fa-code', color: '#ba68c8' }
          ]
        },
        {
          technology: 'DevOps & Docker',
          percent: 85,
          color: '#2496ed',
          icon: 'fab fa-docker',
          frameworks: [
            { title: 'Linux', icon: 'fab fa-linux', color: '#cf7a0a' },
            { title: 'Git', icon: 'fab fa-git-alt', color: '#f05032' }
          ]
        },
        {
          technology: 'Tailwind & UI',
          percent: 90,
          color: '#38b2ac',
          icon: 'fab fa-css3-alt',
          frameworks: [
            { title: 'Bootstrap', icon: 'fab fa-bootstrap', color: '#543b79' }
          ]
        },
        {
          technology: 'Python',
          percent: 80,
          color: '#4894c3',
          icon: 'fab fa-python',
          frameworks: [
            { title: 'Django', icon: 'fab fa-dyalog', color: 'white' }
          ]
        }
      ]
    };
  }
};
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
  border-radius: 8px;
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
  font-size: 20px;
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

.skill .framework i,
.skill .framework svg {
  margin: 8px;
}

.circle {
  stroke-dasharray: 440;
}
</style>

<template>
  <NavBar></NavBar>
  <main class="text-white">
    <!-- About Header & Intro -->
    <section class="px-4 sm:px-8 lg:px-16 xl:px-20 py-10 sm:py-16">
      <h1 class="text-4xl md:text-5xl font-mono text-center">About <span class="text-emerald-400">Me</span></h1>
      <p class="text-center text-gray-400 font-mono mt-3 max-w-2xl mx-auto">
        Senior Software Engineer specializing in scalable backend microservices, modern reactive frontends, and robust system design.
      </p>

      <!-- Personal Info Grid -->
      <div class="bg-zinc-800 p-6 md:p-10 rounded-xl mt-10 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 border border-zinc-700">
        <div>
          <span class="text-gray-400 font-mono text-xs uppercase tracking-wider">Role</span>
          <p class="text-emerald-400 font-bold text-lg">Senior Software Engineer</p>
        </div>
        <div>
          <span class="text-gray-400 font-mono text-xs uppercase tracking-wider">Current Company</span>
          <p class="text-white font-bold text-lg">To The New (TTN)</p>
        </div>
        <div>
          <span class="text-gray-400 font-mono text-xs uppercase tracking-wider">Experience</span>
          <p class="text-white font-bold text-lg">6 Years</p>
        </div>
        <div>
          <span class="text-gray-400 font-mono text-xs uppercase tracking-wider">Location</span>
          <p class="text-white font-bold text-lg">Ashok Nagar, Delhi - 110093</p>
        </div>
        <div>
          <span class="text-gray-400 font-mono text-xs uppercase tracking-wider">Education</span>
          <p class="text-white font-bold text-lg">MCA (2023) | BCA (2020) - IGNOU</p>
        </div>
        <div>
          <span class="text-gray-400 font-mono text-xs uppercase tracking-wider">Problem Solving</span>
          <p class="text-amber-400 font-bold text-lg">500+ LeetCode | HackerRank 6★ Gold</p>
        </div>
      </div>
    </section>

    <!-- Work Experience Section -->
    <section class="px-4 sm:px-8 lg:px-16 xl:px-20 py-10">
      <h2 class="text-3xl md:text-4xl font-mono text-center">Work <span class="text-emerald-400">Experience</span></h2>
      <div class="flex flex-col gap-8 max-w-4xl mx-auto mt-10">
        <div v-for="(exp, index) in experiences" :key="index"
          class="bg-zinc-800 border-l-4 border-emerald-400 p-6 md:p-8 rounded-r-xl shadow-lg">
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-2">
            <h3 class="text-2xl font-bold text-emerald-400 font-mono">{{ exp.company }}</h3>
            <span class="text-sm text-gray-400 font-mono bg-zinc-900 px-3 py-1 rounded-full w-fit">{{ exp.period }}</span>
          </div>
          <h4 class="text-lg font-semibold text-white mt-2">{{ exp.role }}</h4>
          <p class="text-sm text-gray-400 italic mt-1">{{ exp.description }}</p>
          <ul class="list-disc list-inside mt-4 space-y-2 text-gray-300 text-sm leading-relaxed">
            <li v-for="(item, hIdx) in exp.highlights" :key="hIdx">{{ item }}</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="px-4 sm:px-8 lg:px-16 xl:px-20 py-10">
      <h2 class="text-3xl md:text-4xl font-mono text-center">Skills & <span class="text-emerald-400">Expertise</span></h2>
      <div class="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 justify-items-center items-center gap-6 mt-10 max-w-6xl mx-auto">
        <div v-for="skill in skills" :key="skill.technology"
          class="bg-neutral-800 rounded-lg p-5 skill flex flex-col items-center border border-zinc-700">
          <svg class="w-full h-auto">
            <circle class="circle"
              :style="{ strokeDashoffset: `calc(440 - (440 * ${skill.percent}) / 100)`, stroke: skill.color }" cx="70"
              cy="70" r="70">
            </circle>
          </svg>
          <span class="percent block text-center font-bold">{{ skill.percent }}%</span>
          <p class="text-center skillName text-sm md:text-base">
            <font-awesome-icon class="icon" :icon="skill.icon" />&nbsp; {{ skill.technology }}
          </p>
          <div v-if="skill.frameworks && skill.frameworks.length" class="framework flex justify-center mt-2">
            <font-awesome-icon v-for="framework in skill.frameworks" :key="framework.title"
              :style="{ color: framework.color }" class="icon mx-1" :icon="framework.icon" />
          </div>
        </div>
      </div>
    </section>

    <!-- Education Section -->
    <section class="px-4 sm:px-8 lg:px-16 xl:px-20 py-10">
      <h2 class="text-3xl md:text-4xl font-mono text-center">Formal <span class="text-emerald-400">Education</span></h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-10">
        <div v-for="(edu, idx) in education" :key="idx" class="bg-zinc-800 p-6 rounded-xl border border-zinc-700">
          <span class="text-xs text-emerald-400 font-mono uppercase tracking-wider">{{ edu.year }}</span>
          <h3 class="text-xl font-bold text-white mt-1">{{ edu.degree }}</h3>
          <p class="text-amber-400 font-mono text-sm mt-1">{{ edu.institution }}</p>
          <p class="text-sm text-gray-400 mt-3 text-justify">{{ edu.description }}</p>
        </div>
      </div>
    </section>

    <!-- Problem Solving Badges & Links -->
    <section class="px-4 sm:px-8 lg:px-16 xl:px-20 py-12 mb-10">
      <div class="bg-zinc-900 border border-emerald-500/30 p-8 rounded-2xl max-w-4xl mx-auto text-center">
        <h2 class="text-2xl md:text-3xl font-mono text-white">Problem Solving & Algorithms</h2>
        <p class="text-gray-400 text-sm mt-2 max-w-xl mx-auto">
          Over 500+ LeetCode problems solved across Data Structures & Algorithms, combined with a 6th Star Gold Badge on HackerRank.
        </p>
        <div class="flex flex-wrap justify-center gap-4 mt-6">
          <a href="https://leetcode.com/NishantTheProgrammer/" target="_blank" rel="noopener noreferrer"
            class="py-2.5 px-6 bg-amber-500 hover:bg-amber-400 text-black font-bold rounded-lg text-sm transition">
            LeetCode Profile (500+ Solved)
          </a>
          <a href="https://www.hackerrank.com/NishantThePro" target="_blank" rel="noopener noreferrer"
            class="py-2.5 px-6 border border-emerald-400 hover:bg-emerald-500/10 text-emerald-400 font-bold rounded-lg text-sm transition">
            HackerRank 6★ Gold Badge
          </a>
        </div>
      </div>
    </section>
  </main>
</template>
