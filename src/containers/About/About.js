import { Fragment } from "react";
import Badge from "../../components/Badge/Badge";
import Education from "../../components/Education/Education";
import PersonalInfo from "../../components/PersonalInfo/PersonalInfo";
import Skills from "../../components/Skills/Skills";
import classes from './About.module.css';
import nishatImage from '../Home/Nishant.png'


const about = props => {


    return (
        <div className={classes.container}>
            <h1>About <span style={{color: '#ffb400'}}>Me</span></h1>
            <p style={{textAlign: "center"}}>- way doesn't matter, Matter is Destination -</p>
            <PersonalInfo img={nishatImage}/>
            <Education />
            <Badge />
            <Skills />
        </div>
    );
};

export default about;