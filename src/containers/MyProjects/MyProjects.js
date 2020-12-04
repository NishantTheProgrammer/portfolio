import { Fragment } from "react";
import classes from './MyProjects.module.css';
import Projects from '../../components/Projects/Projects';


const projects = props => {


    return (
        <div className={classes.container}>
            <h1>My <span style={{color: '#ffb400'}}>Projects</span></h1>
            <p style={{textAlign: "center"}}>- SOME OF MY PROJECTS. IF YOU WANT TO SEE MORE, MAIL ME. -</p>
            <Projects />
        </div>
    );
};

export default projects;