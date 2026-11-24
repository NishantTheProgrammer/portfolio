import classes from './Experience.module.css';

const experiences = [
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
        description: "Technology-driven social impact venture enabling development sector organizations to track and monitor projects effectively via ICT/Tech solutions.",
        highlights: [
            "Conducted technical interviews, mentored junior developers, designed scalable REST APIs, and reviewed pull requests.",
            "Indian Partner Network: Designed and developed a comprehensive full-stack NGO management platform with Node.js/Express backend and modern Angular frontend. Integrated Form.io dynamic assessments, SendGrid email automation with calendar sync, Amplitude analytics, dynamic CMS, and materialized views.",
            "City Finance: Developed complex reactive forms, integrated geographical maps (GIS), added Google Analytics, and built bulk upload services managing financial data for 4,000+ urban local bodies across India."
        ]
    },
    {
        company: "Max Vision Solutions Pvt. Ltd.",
        period: "Mar 2021 – Dec 2022",
        role: "Mobile Application Developer",
        description: "Web and mobile development company delivering global software services.",
        highlights: [
            "Handled UI development, API integration, testing, deployment, and security implementation.",
            "getlivecoach.com & mobile app: One-to-one video call coaching platform; integrated Stripe payment gateway, Twilio APIs for video, push notifications, and deep linking.",
            "Link Locality: Social networking platform built with Ionic; implemented OTP verification, Google/Facebook login, geolocation, and social sharing.",
            "pay.mesa-qr.com: Multi-vendor restaurant web application with Stripe split payments, QR code generation, and responsive layouts.",
            "Kichi-Mall & In1Mall: E-commerce applications utilizing WordPress, WooCommerce REST API, Ionic, and Angular."
        ]
    }
];

const Experience = () => {
    return (
        <div className={classes.experience}>
            <h1>WORK EXPERIENCE</h1>
            <div className={classes.experienceList}>
                {experiences.map((exp, idx) => (
                    <div key={idx} className={classes.experienceCard}>
                        <div className={classes.companyHeader}>
                            <h2 className={classes.company}>{exp.company}</h2>
                            <span className={classes.period}>{exp.period}</span>
                        </div>
                        <div className={classes.role}>{exp.role}</div>
                        <div className={classes.companyDesc}>{exp.description}</div>
                        <ul className={classes.responsibilities}>
                            {exp.highlights.map((item, hIdx) => (
                                <li key={hIdx}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;

