import { defineStore } from "pinia";
import type { Project } from "@/types";

export const useProjectsStore = defineStore("project", () => {
  const projects: Project[] = [
    {
      title: 'TabCorp (Sports Backend Services)',
      description: "Working on sports-related backend services using Node.js, contributing to the service-bff-sports application. Developed featured sports endpoints, defined API contracts, and enhanced backend functionalities for sports platform integrations.",
      technologies: ['Node.js', 'Microservices', 'REST APIs', 'BFF Architecture', 'API Contracts'],
      category: 'backend',
      featured: true,
      hosted: 'https://www.tabcorp.com.au/'
    },
    {
      title: 'Indian Partner Network',
      description: "Designed and developed a comprehensive full-stack NGO management platform, building robust backend systems with Node.js/Express and modern Angular frontend. Integrated Form.io dynamic assessments, SendGrid email automation with calendar synchronization, Amplitude real-time tracking, dynamic CMS, and materialized views.",
      technologies: ['Node.js', 'Express', 'Angular', 'Form.io', 'SendGrid', 'Amplitude', 'PostgreSQL'],
      category: 'fullstack',
      featured: true,
      hosted: 'https://indiapartnernetwork.org'
    },
    {
      title: 'City Finance Platform',
      description: "Financial tracking and reporting platform handling data for 4,000+ urban local bodies across India. Developed complex reactive forms, integrated GIS map boundaries, implemented Google Analytics, and engineered bulk data upload services.",
      technologies: ['Angular', 'Node.js', 'GIS Maps', 'Reactive Forms', 'Bulk Upload'],
      category: 'frontend',
      featured: true,
      hosted: 'https://cityfinance.in'
    },
    {
      title: 'Shoe Shop (E-Commerce)',
      description: "Developed a mid-level E-Commerce web application in Next.JS for an Israeli client, implementing fast server-side rendering, catalog filtering, cart workflows, and responsive modern UI.",
      technologies: ['Next.js', 'React', 'Tailwind CSS', 'REST APIs'],
      category: 'fullstack',
      featured: true,
      sourceCode: 'https://github.com/NishantTheProgrammer'
    },
    {
      title: 'getlivecoach.com & Mobile App',
      description: "One-to-one video call coaching platform. Integrated Stripe payment gateway, Twilio APIs for real-time video sessions, mobile deep linking, and push notification systems.",
      technologies: ['React', 'Ionic', 'Stripe', 'Twilio APIs', 'Push Notifications'],
      category: 'mobile',
      featured: true,
      hosted: 'http://getlivecoach.com',
      sourceCode: 'https://play.google.com/store/apps/details?id=com.getlivecoach'
    },
    {
      title: 'pay.mesa-qr.com',
      description: "Multi-vendor restaurant contactless ordering web application, incorporating Stripe split payment processing, dynamic QR code generation, and responsive layouts.",
      technologies: ['Node.js', 'Stripe Split Payment', 'QR Generation', 'Responsive Web'],
      category: 'fullstack',
      featured: true,
      hosted: 'https://pay.mesa-qr.com'
    },
    {
      title: 'Link Locality',
      description: "Social networking platform built with Ionic featuring OTP verification, Google and Facebook social login, geolocation mapping, and social activity sharing.",
      technologies: ['Ionic', 'Angular', 'OAuth (Google/FB)', 'Geolocation', 'OTP'],
      category: 'mobile',
      hosted: 'https://play.google.com/store/apps/details?id=mvs.pw.linklocality'
    },
    {
      title: 'Kichi-Mall & In1Mall',
      description: "Cross-platform e-commerce applications utilizing WordPress, WooCommerce REST API backend, and Ionic/Angular frontends.",
      technologies: ['Ionic', 'Angular', 'WordPress', 'WooCommerce REST API'],
      category: 'mobile',
      hosted: 'https://play.google.com/store/apps/details?id=com.mvs.kicimall'
    },
    {
      title: 'SkillsAkhada',
      description: "Gaming tournament platform built with Flutter, React, and Node.js REST APIs for tournament bracket management, player scoring, and team matchmaking.",
      technologies: ['Flutter', 'React', 'Node.js', 'REST APIs'],
      category: 'mobile',
      sourceCode: 'https://github.com/NishantTheProgrammer'
    },
    {
      title: 'City Bus Management System',
      description: "Contributed to a project involving transit and bus fleet scheduling using Django REST APIs and Vue.js.",
      technologies: ['Django', 'Vue.js', 'Python', 'MySQL', 'REST APIs'],
      category: 'backend',
      sourceCode: 'https://github.com/NishantTheProgrammer/cbms'
    }
  ];

  return { projects };
});
