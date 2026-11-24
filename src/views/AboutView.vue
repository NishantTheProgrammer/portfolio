<script setup lang="ts">
import NavBar from '@/components/NavBar.vue';
import type { Experience, Education, Skill } from '@/types';

const experiences: Experience[] = [
  {
    company: "To The New (TTN)",
    period: "Dec 2025 – Present",
    role: "Senior Software Engineer",
    description: "Technology consulting company providing digital transformation and software engineering solutions to global enterprises.",
    highlights: [
      "Developing backend services, designing REST APIs, and implementing microservice-based solutions for enterprise systems.",
      "TabCorp: Working on sports-related backend services using Node.js, contributing to the service-bff-sports application. Developed featured sports endpoints, defined API contracts, and enhanced backend functionalities for sports platform integrations."
    ]
  },
  {
    company: "Dhwani Rural Information Systems",
    period: "Jan 2023 – Dec 2025",
    role: "SDE-2 Full Stack",
    description: "Technology-driven social impact venture enabling development sector organizations to track and monitor projects effectively via ICT/Tech solutions.",
    highlights: [
      "Conducted technical interviews, mentored junior developers, designed scalable REST APIs, and performed architectural pull request reviews.",
      "Indian Partner Network: Designed and developed a comprehensive full-stack NGO management platform with Node.js/Express backend and modern Angular frontend. Integrated Form.io dynamic assessments, SendGrid email automation with calendar synchronization, Amplitude tracking, dynamic CMS, and materialized views.",
      "City Finance: Developed complex reactive forms, integrated GIS map boundaries, implemented Google Analytics, and engineered high-volume bulk upload services managing financial data for 4,000+ urban local bodies across India."
    ]
  },
  {
    company: "Max Vision Solutions Pvt. Ltd.",
    period: "Mar 2021 – Dec 2022",
    role: "Mobile Application Developer",
    description: "Global web and mobile application engineering services company delivering high-efficiency platforms.",
    highlights: [
      "UI development, API integration, testing, deployment, and security implementation.",
      "getlivecoach.com & mobile app: One-to-one video call coaching platform; integrated Stripe payment gateway, Twilio APIs for real-time video sessions, mobile deep linking, and push notification systems.",
      "Link Locality: Social networking platform built with Ionic; implemented OTP verification, Google and Facebook OAuth logins, geolocation, and social sharing.",
      "pay.mesa-qr.com: Multi-vendor restaurant web application with Stripe split payments, QR code generation, and responsive layouts.",
      "Kichi-Mall & In1Mall: E-commerce applications utilizing WordPress, WooCommerce REST API, Ionic, and Angular."
    ]
  }
];

const education: Education[] = [
  {
    degree: "Master in Computer Applications (MCA)",
    institution: "Indira Gandhi National Open University (IGNOU)",
    year: "2023",
    description: "Advanced degree focusing on distributed systems architecture, database management systems, advanced software design, and engineering methodologies."
  },
  {
    degree: "Bachelor in Computer Application (BCA)",
    institution: "Indira Gandhi National Open University (IGNOU)",
    year: "2020",
    description: "Foundational computer science program covering algorithms, data structures, object-oriented programming, and modern web application development."
  }
];

const skills: Skill[] = [
  {
    technology: 'Node.js',
    percent: 95,
    color: '#339933',
    icon: ['fab', 'node-js'],
    frameworks: [
      { title: 'Express.js', icon: 'server', color: '#ffffff' }
    ]
  },
  {
    technology: 'TypeScript & JS',
    percent: 95,
    color: '#3178c6',
    icon: ['fab', 'js-square'],
    frameworks: [
      { title: 'React JS', icon: ['fab', 'react'], color: '#15aabf' },
      { title: 'Angular', icon: ['fab', 'angular'], color: '#dd0031' },
      { title: 'Vue JS', icon: ['fab', 'vuejs'], color: '#35b741' }
    ]
  },
  {
    technology: 'Microservices',
    percent: 90,
    color: '#ffb400',
    icon: 'network-wired',
    frameworks: [
      { title: 'REST APIs', icon: 'server', color: '#ffb400' }
    ]
  },
  {
    technology: 'Databases',
    percent: 90,
    color: '#47a248',
    icon: 'database',
    frameworks: [
      { title: 'MongoDB & PostgreSQL', icon: 'database', color: '#336791' }
    ]
  },
  {
    technology: 'Gen AI & RAG',
    percent: 85,
    color: '#8a2be2',
    icon: 'brain',
    frameworks: [
      { title: 'Agentic AI', icon: 'code', color: '#ba68c8' }
    ]
  },
  {
    technology: 'DevOps & Docker',
    percent: 85,
    color: '#2496ed',
    icon: ['fab', 'docker'],
    frameworks: [
      { title: 'Linux', icon: ['fab', 'linux'], color: '#cf7a0a' },
      { title: 'Git', icon: ['fab', 'git-alt'], color: '#f05032' }
    ]
  },
  {
    technology: 'Tailwind & UI',
    percent: 90,
    color: '#38b2ac',
    icon: ['fab', 'css3-alt'],
    frameworks: [
      { title: 'Bootstrap', icon: ['fab', 'bootstrap'], color: '#543b79' }
    ]
  },
  {
    technology: 'Python',
    percent: 80,
    color: '#4894c3',
    icon: ['fab', 'python'],
    frameworks: [
      { title: 'Django', icon: ['fab', 'dyalog'], color: 'white' }
    ]
  }
];
</script>

<template>
  <NavBar />

  <main class="flex-1 py-12 md:py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

      <!-- About Header & Highlights Card -->
      <section class="space-y-8">
        <div class="text-center max-w-3xl mx-auto space-y-3">
          <span class="text-xs uppercase font-mono tracking-widest text-emerald-400 font-bold">Profile Overview</span>
          <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold font-mono text-white">About Me</h1>
          <p class="text-gray-300 font-mono text-sm sm:text-base leading-relaxed">
            Senior Software Engineer with 6 years of experience engineering high-throughput backend services, full-stack platforms, and microservices architecture.
          </p>
        </div>

        <!-- Quick Info Grid -->
        <div class="bg-zinc-800/80 border border-zinc-700/80 rounded-2xl p-6 sm:p-10 shadow-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="bg-zinc-900/60 p-4 rounded-xl border border-zinc-700/50">
            <span class="text-xs font-mono uppercase text-gray-400 tracking-wider">Current Role</span>
            <p class="text-emerald-400 font-bold font-mono text-lg mt-1">Senior Software Engineer</p>
            <p class="text-xs text-gray-400 font-mono">To The New (TTN)</p>
          </div>
          <div class="bg-zinc-900/60 p-4 rounded-xl border border-zinc-700/50">
            <span class="text-xs font-mono uppercase text-gray-400 tracking-wider">Experience</span>
            <p class="text-white font-bold font-mono text-lg mt-1">6 Years</p>
            <p class="text-xs text-gray-400 font-mono">10+ Scalable Enterprise Apps</p>
          </div>
          <div class="bg-zinc-900/60 p-4 rounded-xl border border-zinc-700/50">
            <span class="text-xs font-mono uppercase text-gray-400 tracking-wider">Location</span>
            <p class="text-white font-bold font-mono text-lg mt-1">Delhi, India</p>
            <p class="text-xs text-gray-400 font-mono">Ashok Nagar - 110093</p>
          </div>
          <div class="bg-zinc-900/60 p-4 rounded-xl border border-zinc-700/50">
            <span class="text-xs font-mono uppercase text-gray-400 tracking-wider">Problem Solving</span>
            <p class="text-amber-400 font-bold font-mono text-lg mt-1">500+ LeetCode Solved</p>
            <p class="text-xs text-gray-400 font-mono">HackerRank 6th Star Gold Badge</p>
          </div>
          <div class="bg-zinc-900/60 p-4 rounded-xl border border-zinc-700/50">
            <span class="text-xs font-mono uppercase text-gray-400 tracking-wider">Highest Education</span>
            <p class="text-white font-bold font-mono text-lg mt-1">MCA (2023)</p>
            <p class="text-xs text-gray-400 font-mono">IGNOU (Master of Computer Applications)</p>
          </div>
          <div class="bg-zinc-900/60 p-4 rounded-xl border border-zinc-700/50">
            <span class="text-xs font-mono uppercase text-gray-400 tracking-wider">Direct Contact</span>
            <p class="text-emerald-400 font-bold font-mono text-base mt-1 truncate">knishant113@gmail.com</p>
            <p class="text-xs text-gray-400 font-mono">+91 7838716089</p>
          </div>
        </div>
      </section>

      <!-- Work Experience Timeline -->
      <section class="space-y-10">
        <div class="text-center max-w-2xl mx-auto space-y-2">
          <span class="text-xs uppercase font-mono tracking-widest text-emerald-400 font-bold">Career Progression</span>
          <h2 class="text-3xl sm:text-4xl font-extrabold font-mono text-white">Work Experience</h2>
        </div>

        <div class="relative border-l-2 border-emerald-500/30 ml-4 sm:ml-8 md:ml-12 space-y-12">
          <div
            v-for="(exp, idx) in experiences"
            :key="idx"
            class="relative pl-6 sm:pl-10 group"
          >
            <!-- Timeline dot -->
            <div class="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-emerald-400 border-4 border-[#121417] group-hover:scale-125 transition-transform"></div>

            <div class="bg-zinc-800/80 border border-zinc-700/70 hover:border-emerald-500/40 rounded-2xl p-6 sm:p-8 transition-all duration-300 shadow-xl space-y-4">
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-700/60 pb-4">
                <div>
                  <h3 class="text-xl sm:text-2xl font-bold font-mono text-emerald-400">{{ exp.company }}</h3>
                  <p class="text-white font-semibold text-base mt-0.5">{{ exp.role }}</p>
                </div>
                <span class="inline-block px-3 py-1 rounded-full text-xs font-mono font-medium bg-zinc-900 text-gray-300 border border-zinc-700/60 w-fit">
                  {{ exp.period }}
                </span>
              </div>

              <p class="text-sm text-gray-400 italic font-mono">{{ exp.description }}</p>

              <ul class="space-y-2.5 pt-1">
                <li
                  v-for="(item, hIdx) in exp.highlights"
                  :key="hIdx"
                  class="flex items-start gap-3 text-sm text-gray-300 font-mono leading-relaxed"
                >
                  <span class="text-emerald-400 mt-1 text-xs">▸</span>
                  <span>{{ item }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Skills Matrix -->
      <section class="space-y-10">
        <div class="text-center max-w-2xl mx-auto space-y-2">
          <span class="text-xs uppercase font-mono tracking-widest text-emerald-400 font-bold">Tech Stack</span>
          <h2 class="text-3xl sm:text-4xl font-extrabold font-mono text-white">Skills & Competencies</h2>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          <div
            v-for="skill in skills"
            :key="skill.technology"
            class="bg-zinc-800/80 border border-zinc-700/70 hover:border-emerald-500/50 rounded-2xl p-5 flex flex-col items-center justify-between text-center transition-all duration-300 shadow-lg hover:-translate-y-1"
          >
            <!-- Circular Progress Indicator -->
            <div class="relative w-28 h-28 my-2">
              <svg class="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="currentColor"
                  stroke-width="8"
                  class="text-zinc-900"
                  fill="transparent"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  :stroke="skill.color"
                  stroke-width="8"
                  stroke-linecap="round"
                  fill="transparent"
                  :stroke-dasharray="251.2"
                  :stroke-dashoffset="251.2 - (251.2 * skill.percent) / 100"
                  class="transition-all duration-1000 ease-out"
                />
              </svg>
              <div class="absolute inset-0 flex items-center justify-center font-mono font-bold text-lg text-white">
                {{ skill.percent }}%
              </div>
            </div>

            <!-- Skill Name -->
            <div class="mt-2 space-y-1">
              <p class="font-mono font-bold text-sm sm:text-base text-white flex items-center justify-center gap-2">
                <font-awesome-icon :icon="skill.icon" />
                <span>{{ skill.technology }}</span>
              </p>
              
              <!-- Framework icons / pills -->
              <div v-if="skill.frameworks?.length" class="flex items-center justify-center gap-2 pt-2">
                <span
                  v-for="framework in skill.frameworks"
                  :key="framework.title"
                  class="text-[11px] font-mono py-0.5 px-2 rounded bg-zinc-900 text-gray-300 border border-zinc-700"
                >
                  {{ framework.title }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Formal Education -->
      <section class="space-y-10">
        <div class="text-center max-w-2xl mx-auto space-y-2">
          <span class="text-xs uppercase font-mono tracking-widest text-emerald-400 font-bold">Academic Foundation</span>
          <h2 class="text-3xl sm:text-4xl font-extrabold font-mono text-white">Education</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div
            v-for="(edu, idx) in education"
            :key="idx"
            class="bg-zinc-800/80 border border-zinc-700/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl"
          >
            <div>
              <span class="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full uppercase tracking-wider">
                Graduated {{ edu.year }}
              </span>
              <h3 class="text-xl font-bold font-mono text-white mt-4">{{ edu.degree }}</h3>
              <p class="text-amber-400 font-mono text-sm mt-1">{{ edu.institution }}</p>
              <p class="text-sm text-gray-300 font-mono mt-4 leading-relaxed text-justify">
                {{ edu.description }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Competitive Problem Solving Card -->
      <section class="py-4">
        <div class="bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 border border-amber-500/30 rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-2xl space-y-6">
          <div class="inline-flex p-3 rounded-2xl bg-amber-500/10 text-amber-400 text-2xl">
            <font-awesome-icon icon="code" />
          </div>
          
          <h2 class="text-2xl sm:text-3xl font-extrabold font-mono text-white">Problem Solving & Algorithms</h2>
          <p class="text-gray-300 font-mono text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Consistently sharpening algorithmic logic and system design intuition. Solved over 500+ problems on LeetCode and attained HackerRank's highest 6th Star Gold Badge in Problem Solving.
          </p>

          <div class="flex flex-wrap justify-center gap-4 pt-2">
            <a
              href="https://leetcode.com/NishantTheProgrammer/"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm tracking-wide transition-all shadow-lg"
            >
              <span>View LeetCode (500+ Solved)</span>
            </a>
            <a
              href="https://www.hackerrank.com/NishantThePro"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-700 text-emerald-400 font-bold text-sm border border-emerald-500/40 transition-colors"
            >
              <span>HackerRank 6★ Gold Profile</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  </main>
</template>
