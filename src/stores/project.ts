import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useProjectsStore = defineStore("project", () => {
  const projects = [
    {
      title: 'ChatThings',
      media: {
        type: 'video',                                                   // ['youtube', 'video', 'img']
        link: './Media/chatThings.mp4'
      },
      description: "I​t’s a social media application where users can Chat, make friends, listen same music simultaneously, Post, comments and react on post, share stories, play basic multiplayer games like KBC and tic-tac-toe",
      sourceCode: 'https://github.com/NishantTheProgrammer/ChatThings',
      technologies: ['django', 'react', 'mysql']
    },
    {
      title: 'WebDraw',
      media: {
        type: 'youtube',                                                   // ['youtube', 'video', 'img']
        link: 'https://www.youtube.com/embed/sb9HfMbqmmM'
      },
      description: 'WebDraw is web based drawing tool made with JavaScript (vue.js) which contain all the features related to drawing',
      sourceCode: 'https://github.com/NishantTheProgrammer/WebDraw/',
      hosted: 'https://nishanttheprogrammer.github.io/WebDraw/',
      technologies: ['vue']
    },
    {
      title: 'ResumeBuilder',
      media: {
        type: 'video',                                                   // ['youtube', 'video', 'img']
        link: './Media/ResumeBuilder.mp4'
      },
      description: "It's a react application for build your resume on the web, which will container some pre made template",
      sourceCode: 'https://github.com/NishantTheProgrammer/ResumeBuilder',
      hosted: 'https://resumebuilder.nishanttheprogrammer.com/',
      technologies: ['react']
    },
    {
      title: '1GamerPro | Esprots web app',
      media: {
        type: 'video',                                                   // ['youtube', 'video', 'img']
        link: './Media/1GamerPro.mp4'
      },
      description: 'This is a Laravel website an eSports platform for tournaments organizers, their participants and their fans.',
      sourceCode: 'https://github.com/NishantTheProgrammer/1GamerPro',
      technologies: ['laravel', 'mysql']
    },
    {
      title: 'Bus Management System',
      media: {
        type: 'youtube',                                                   // ['youtube', 'video', 'img']
        link: 'https://www.youtube.com/embed/W0VFvyU7R64'
      },
      description: "This is a java based web application to manage actions related to Bus and it's transport",
      sourceCode: 'https://github.com/NishantTheProgrammer/BusManagementSystem',
      technologies: ['java', 'jsp', 'apache', 'mysql']
    },
    {
      title: 'ATMsimulator',
      media: {
        type: 'youtube',                                                   // ['youtube', 'video', 'img']
        link: 'https://www.youtube.com/embed/025lPzicWus'
      },
      description: "This is a web based project to simulate and teach children and other peoples to know how actual ATM machine works",
      sourceCode: 'https://github.com/NishantTheProgrammer/ATMsimulator',
      technologies: ['css']
    },
    {
      title: 'BubbleBurst',
      media: {
        type: 'video',                                                   // ['youtube', 'video', 'img']
        link: './Media/BubbleBurst.mp4'
      },
      description: "This is a multiplayer PC game made with Vue.js for front end and Laravel (PHP) is for back and DB MySQL",
      sourceCode: 'https://github.com/NishantTheProgrammer/BubbleBurst',
      hosted: 'https://nishanttheprogrammer.github.io/BubbleBurst/',
      technologies: ['html', 'css', 'javascript']
    },
    {
      title: 'Save The Queen | 2-d shooting',
      media: {
        type: 'youtube',                                                   // ['youtube', 'video', 'img']
        link: 'https://www.youtube.com/embed/hkgdq0Igvdo'
      },
      description: "Here enemies will spawn at a random location and trying to kill the queen. We've to save the Queen",
      sourceCode: 'https://github.com/NishantTheProgrammer/SaveTheQueen',
      technologies: ['python', 'pygame']
    },
    {
      title: 'Voice Calculator',
      media: {
        type: 'video',                                                   // ['youtube', 'video', 'img']
        link: './Media/voiceCal.mp4'
      },
      description: "A simple calculator operated by voice commands made with python",
      sourceCode: 'https://github.com/NishantTheProgrammer/voiceCalculator',
      technologies: ['python']
    },
    {
      title: 'ExperimentsWith{Code}',
      media: {
        type: 'youtube',                                                   // ['youtube', 'video', 'img']
        link: 'https://www.youtube.com/embed/7gQcsYpdWA4'
      },
      description: "A Landing page, login form, registration form and a home page this design was a challenge by my friend Himanshu",
      sourceCode: 'https://github.com/NishantTheProgrammer/ExperimentsWithCode',
      technologies: ['html', 'css', 'javascript']
    },
    {
      title: 'Facebook Online Notifier',
      media: {
        type: 'youtube',                                                   // ['youtube', 'video', 'img']
        link: 'https://www.youtube.com/embed/wAS8c_BPilY'
      },
      description: "This is a python web automation tool made with selenium to inform me when somebody is online",
      sourceCode: 'https://github.com/NishantTheProgrammer/WebAutomation/blob/master/facebookNotifier.py',
      technologies: ['selenium']
    },
    {
      title: 'Corona Alerts',
      media: {
        type: 'video',                                                   // ['youtube', 'video', 'img']
        link: './Media/corona.mp4'
      },
      description: "The repository is for alerting peoples through WhatsApp for corona updates interested counties (Infected Peoples and deaths) #StayAtHome",
      sourceCode: 'https://github.com/NishantTheProgrammer/CoronaAlerts',
      technologies: ['flask', 'pythonanywhere']
    },
    {
      title: 'I Card Generator',
      media: {
        type: 'video',                                                   // ['youtube', 'video', 'img']
        link: './Media/iCardGeneratior.mp4'
      },
      description: "JavaScript code to create simple I card dynamically",
      sourceCode: 'https://github.com/NishantTheProgrammer/iCardGenerator/',
      hosted: 'https://nishanttheprogrammer.github.io/iCardGenerator/',
      technologies: ['react']
    },
  ];


  return { projects };
});
