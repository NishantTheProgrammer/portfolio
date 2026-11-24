import Badge from "../../components/Badge/Badge";
import Education from "../../components/Education/Education";
import Experience from "../../components/Experience/Experience";
import PersonalInfo from "../../components/PersonalInfo/PersonalInfo";
import Skills from "../../components/Skills/Skills";
import classes from './About.module.css';
import nishatImage from '../Home/Nishant.png';

const about = props => {
    return (
        <div className={classes.container}>
            <h1>About <span style={{color: '#ffb400'}}>Me</span></h1>
            <p style={{textAlign: "center"}}>- Crafting scalable architectures, robust microservices, and high-impact applications -</p>
            <PersonalInfo img={nishatImage}/>
            <Experience />
            <Skills />
            <Badge />
            <Education />
        </div>
    );
};

export default about;
