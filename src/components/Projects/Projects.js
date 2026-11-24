import Project from "./Project/Project";
import classes from './Projects.module.css';

const projects = props => {

    const projectsData = [
        {
            title: 'Indian Partner Network',
            media: {
                type: 'youtube',
                link: 'https://www.youtube.com/embed/7gQcsYpdWA4'
            },
            description: "A comprehensive full-stack NGO management platform. Built robust backend systems with Node.js/Express and modern Angular frontend. Integrated Form.io dynamic assessments, SendGrid email automation, Amplitude real-time tracking, dynamic CMS, and materialized views.",
            hosted: 'https://nishanttheprogrammer.com'
        },
        {
            title: 'City Finance Platform',
            media: {
                type: 'youtube',
                link: 'https://www.youtube.com/embed/W0VFvyU7R64'
            },
            description: "Financial tracking and reporting platform handling data for 4,000+ urban local bodies across India. Developed complex reactive forms, integrated GIS map boundaries, implemented Google Analytics, and engineered high-volume bulk data upload pipelines.",
            hosted: 'https://cityfinance.in/'
        },
        {
            title: 'Shoe Shop (E-Commerce)',
            media: {
                type: 'video',
                link: './Media/ResumeBuilder.mp4'
            },
            description: "Developed a mid-level E-Commerce web application in Next.JS for an international client, implementing fast server-side rendering, catalog filtering, cart workflows, and responsive modern UI.",
            sourceCode: 'https://github.com/NishantTheProgrammer'
        },
        {
            title: 'getlivecoach.com & Mobile App',
            media: {
                type: 'video',
                link: './Media/chatThings.mp4'
            },
            description: "One-to-one video call coaching platform. Integrated Stripe payment gateway, Twilio APIs for real-time video sessions, mobile deep linking, and push notification systems.",
            hosted: 'https://getlivecoach.com'
        },
        {
            title: 'pay.mesa-qr.com',
            media: {
                type: 'video',
                link: './Media/1GamerPro.mp4'
            },
            description: "Multi-vendor restaurant contactless ordering web application, incorporating Stripe split payment processing, dynamic QR code generation, and responsive layouts.",
            hosted: 'https://pay.mesa-qr.com'
        },
        {
            title: 'SkillsAkhada',
            media: {
                type: 'video',
                link: './Media/BubbleBurst.mp4'
            },
            description: "Gaming tournament platform built with Flutter, React, and Node.js REST APIs for tournament bracket management, player scoring, and team matchmaking.",
            sourceCode: 'https://github.com/NishantTheProgrammer'
        },
        {
            title: 'ChatThings',
            media: {
                type: 'video',
                link: './Media/chatThings.mp4'
            },
            description: "Full-featured social media application where users can chat in real-time, listen to synchronized music simultaneously, share posts/stories, and play multiplayer games.",
            sourceCode: 'https://github.com/NishantTheProgrammer/ChatThings'
        },
        {
            title: 'WebDraw',
            media: {
                type: 'youtube',
                link: 'https://www.youtube.com/embed/sb9HfMbqmmM'
            },
            description: "Web-based vector and freeform drawing tool made with JavaScript and Vue.js containing rich canvas controls, layering, and instant export capabilities.",
            sourceCode: 'https://github.com/NishantTheProgrammer/WebDraw/',
            hosted: 'https://nishanttheprogrammer.github.io/WebDraw/'
        },
        {
            title: 'ResumeBuilder',
            media: {
                type: 'video',
                link: './Media/ResumeBuilder.mp4'
            },
            description: "Interactive React web application for building professional, customizable resumes with real-time preview and export templates.",
            sourceCode: 'https://github.com/NishantTheProgrammer/ResumeBuilder',
            hosted: 'https://resumebuilder.nishanttheprogrammer.com/'
        }
    ];

    return (
        <div className={classes.projects}>
            { projectsData.map((data, i) => <Project key={i} {...data} />) }
        </div>
    );
};

export default projects;
