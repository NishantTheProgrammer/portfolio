import Skill from '../Skills/Skill/Skill';
import classes from './Skills.module.css';

const skills = props => {

    const skillsData = {
        HTML: {
            percent: 80,
            color: '#de4b25',
            icon: 'fab fa-html5'
        },
        CSS: {
            percent: 75,
            color: '#3596d0',
            icon: 'fab fa-css3-alt'
        },
        JavaScript: {
            percent: 90,
            color: '#f0d91d',
            icon: 'fab fa-js-square',
            frameworks: [
                { title: 'React JS', icon: 'fab fa-react', color: '#15aabf' },
                { title: 'Vue JS', icon: 'fab fa-vuejs', color: '#35b741' }
            ]
        },
        Python: {
            percent: 85,
            color: '#4894c3',
            icon: 'fab fa-python',
            frameworks: [
                { title: 'Django', icon: 'fab fa-dyalog', color: 'white' },
            ]
        },
        SQL: {
            percent: 70,
            color: '#27efff',
            icon: 'fas fa-database'
        },
        Linux: {
            percent: 55,
            color: '#cf7a0a',
            icon: 'fa fa-linux'
        },
        PHP: {
            percent: 85,
            color: '#8993be',
            icon: 'fab fa-php',
            frameworks: [{ title: 'Laravel', icon: 'fab fa-laravel', color: 'red' }]
        },
        Bootstrap: {
            percent: 65,
            color: '#543b79',
            icon: 'fab fa-bootstrap'
        },
        Java: {
            percent: 80,
            color: '#e61f24',
            icon: 'fab fa-java'
        },
        "C Language": {
            percent: 75,
            color: '#cdc6c6',
            icon: 'fab fa-cuttlefish'
        },
        Photoshop: {
            percent: 60,
            color: '#0f5367',
            icon: 'fab fa-adobe'
        },
        Illustrator: {
            percent: 60,
            color: '#ed6c1f',
            icon: 'fab fa-adobe'
        },
        Blender: {
            percent: 50,
            color: '#f86d20',
            icon: 'fab fa-css3-alt'
        },
        Unity: {
            percent: 30,
            color: '#9428b2',
            icon: 'fab fa-unity'
        }
    }



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
    )
}

export default skills;