import Skill from '../Skills/Skill/Skill';
import classes from './Skills.module.css';

const skills = props => {

    const skillsData = {
        "Node.js": {
            percent: 95,
            color: '#339933',
            icon: 'fab fa-node-js',
            frameworks: [
                { title: 'Express.js', icon: 'fas fa-server', color: '#ffffff' },
                { title: 'Next.js', icon: 'fas fa-bolt', color: '#ffffff' }
            ]
        },
        "TypeScript & JS": {
            percent: 95,
            color: '#3178c6',
            icon: 'fab fa-js-square',
            frameworks: [
                { title: 'React JS', icon: 'fab fa-react', color: '#15aabf' },
                { title: 'Angular', icon: 'fab fa-angular', color: '#dd0031' },
                { title: 'Vue JS', icon: 'fab fa-vuejs', color: '#35b741' }
            ]
        },
        "Microservices": {
            percent: 90,
            color: '#ffb400',
            icon: 'fas fa-network-wired',
            frameworks: [
                { title: 'System Design', icon: 'fas fa-sitemap', color: '#ffb400' },
                { title: 'REST APIs', icon: 'fas fa-exchange-alt', color: '#ffffff' }
            ]
        },
        "Databases": {
            percent: 90,
            color: '#47a248',
            icon: 'fas fa-database',
            frameworks: [
                { title: 'MongoDB', icon: 'fas fa-leaf', color: '#47a248' },
                { title: 'PostgreSQL', icon: 'fas fa-database', color: '#336791' },
                { title: 'MySQL', icon: 'fas fa-table', color: '#4479a1' }
            ]
        },
        "Gen AI & RAG": {
            percent: 85,
            color: '#8a2be2',
            icon: 'fas fa-brain',
            frameworks: [
                { title: 'Agentic AI', icon: 'fas fa-robot', color: '#ba68c8' },
                { title: 'LangGraph', icon: 'fas fa-project-diagram', color: '#81c784' }
            ]
        },
        "Docker & DevOps": {
            percent: 85,
            color: '#2496ed',
            icon: 'fab fa-docker',
            frameworks: [
                { title: 'Linux', icon: 'fab fa-linux', color: '#fcc624' },
                { title: 'Git', icon: 'fab fa-git-alt', color: '#f05032' },
                { title: 'Jest', icon: 'fas fa-vial', color: '#c21325' }
            ]
        },
        "Frontend & UI": {
            percent: 90,
            color: '#38b2ac',
            icon: 'fab fa-css3-alt',
            frameworks: [
                { title: 'Tailwind CSS', icon: 'fab fa-css3', color: '#38b2ac' },
                { title: 'Material UI', icon: 'fas fa-layer-group', color: '#0081cb' },
                { title: 'Bootstrap', icon: 'fab fa-bootstrap', color: '#563d7c' }
            ]
        },
        "HTML5 & CSS3": {
            percent: 90,
            color: '#e34f26',
            icon: 'fab fa-html5'
        }
    };

    return (
        <div className={classes.skills}>
            { Object.keys(skillsData).map(item => <Skill 
                key={item}
                type={item}
                percent={skillsData[item].percent} 
                color={skillsData[item].color} 
                icon={skillsData[item].icon} 
                frameworks={skillsData[item].frameworks}
            />) }
        </div>
    );
};

export default skills;
