import { defineStore } from "pinia";

export const useProjectsStore = defineStore("project", () => {
  const projects = [
    {
      title: 'Indian Partner Network',
      description: "Comprehensive full-stack NGO management platform with Node.js/Express backend and modern Angular frontend. Integrated Form.io dynamic assessments, SendGrid email automation with calendar synchronization, Amplitude analytics, dynamic CMS, and materialized views.",
      technologies: ['node.js', 'express', 'angular', 'form.io', 'sendgrid', 'amplitude'],
      hosted: 'https://nishanttheprogrammer.com'
    },
    {
      title: 'City Finance Platform',
      description: "Financial tracking and reporting platform handling data for 4,000+ urban local bodies across India. Developed complex reactive forms, integrated GIS map boundaries, implemented Google Analytics, and engineered bulk data upload services.",
      technologies: ['angular', 'node.js', 'gis-maps', 'reactive-forms'],
      hosted: 'https://cityfinance.in/'
    },
    {
      title: 'Shoe Shop (E-Commerce)',
      description: "Developed a mid-level E-Commerce web application in Next.JS for an international client, implementing fast server-side rendering, catalog filtering, cart workflows, and responsive modern UI.",
      technologies: ['next.js', 'react', 'tailwind', 'rest-api'],
      sourceCode: 'https://github.com/NishantTheProgrammer'
    },
    {
      title: 'getlivecoach.com & Mobile App',
      description: "One-to-one video call coaching platform. Integrated Stripe payment gateway, Twilio APIs for real-time video sessions, mobile deep linking, and push notification systems.",
      technologies: ['react', 'ionic', 'stripe', 'twilio', 'rest-api'],
      hosted: 'https://getlivecoach.com'
    },
    {
      title: 'pay.mesa-qr.com',
      description: "Multi-vendor restaurant contactless ordering web application, incorporating Stripe split payment processing, dynamic QR code generation, and responsive layouts.",
      technologies: ['node.js', 'stripe', 'qr-code', 'responsive-web'],
      hosted: 'https://pay.mesa-qr.com'
    },
    {
      title: 'SkillsAkhada',
      description: "Gaming tournament platform built with Flutter, React, and Node.js REST APIs for tournament bracket management, player scoring, and team matchmaking.",
      technologies: ['flutter', 'react', 'node.js'],
      sourceCode: 'https://github.com/NishantTheProgrammer'
    },
    {
      title: 'City Bus Management System',
      description: "Comprehensive transit and fleet management platform for tracking bus schedules, routes, and operational status using Django REST APIs and Vue.js.",
      technologies: ['django', 'vue.js', 'python', 'mysql'],
      sourceCode: 'https://github.com/NishantTheProgrammer/BusManagementSystem'
    },
    {
      title: 'ChatThings',
      description: "Social media platform where connections flourish through chats, shared music experiences, and multiplayer games with real-time WebSockets.",
      technologies: ['django', 'react', 'mysql'],
      sourceCode: 'https://github.com/NishantTheProgrammer/ChatThings'
    },
    {
      title: 'WebDraw',
      description: 'Web-based drawing tool made with JavaScript (Vue.js) containing rich canvas controls, layering, and instant export capabilities.',
      technologies: ['vue', 'javascript', 'html5'],
      sourceCode: 'https://github.com/NishantTheProgrammer/WebDraw/',
      hosted: 'https://nishanttheprogrammer.github.io/WebDraw/'
    },
    {
      title: 'ResumeBuilder',
      description: "Interactive React web application for building professional, customizable resumes with real-time preview and export templates.",
      technologies: ['react', 'css'],
      sourceCode: 'https://github.com/NishantTheProgrammer/ResumeBuilder',
      hosted: 'https://resumebuilder.nishanttheprogrammer.com/'
    }
  ];

  return { projects };
});
