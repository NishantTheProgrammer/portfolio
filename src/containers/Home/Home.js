import { Link } from "react-router-dom";
import Role from "../../components/Role/Role";
import classes from './Home.module.css';
import nishatImage from './Nishant.png';

const Home = props => {
    return (
        <>
            <img src={nishatImage} alt="Nishant" className={classes.profileImage}></img>
            <div className={classes.container}>
                <h3>Hi, My name is <span style={{color: '#ffb400', fontSize: 23, fontFamily: 'Nunito'}}>Nishant</span></h3>
                <p><b>Senior Software Engineer</b> at <b>To The New (TTN)</b></p>
                <h1 style={{fontFamily: 'Nunito'}}>I'm A <Role /></h1>
                <p>
                    Senior Software Engineer with <b>6 years of experience</b> delivering 10+ scalable applications across diverse domains. Specialized in building robust backend services, microservices, dynamic full-stack web applications, and problem-solving (<b>500+ LeetCode</b> solved & <b>HackerRank 6★</b> Gold Badge).
                </p>
                <div className={classes.links}>
                    <div className={classes.socialLinks}>
                        <a href="https://github.com/NishantTheProgrammer" target="_blank" rel="noopener noreferrer" title="GitHub"><i className="fab fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/nishant" target="_blank" rel="noopener noreferrer" title="LinkedIn"><i className="fab fa-linkedin"></i></a>
                        <a href="https://leetcode.com/NishantTheProgrammer/" target="_blank" rel="noopener noreferrer" title="LeetCode"><i className="fas fa-code"></i></a>
                        <a href="https://twitter.com/NishantThePro" target="_blank" rel="noopener noreferrer" title="Twitter"><i className="fab fa-twitter"></i></a>
                        <a href="mailto:knishant113@gmail.com" title="Email"><i className="fas fa-envelope"></i></a>
                    </div>
                    <div className={classes.btn}>
                        <Link to="/about"><i className="fa fa-address-card" aria-hidden="true"> </i> More about me</Link>
                        <Link to="/projects"><i className="fa fa-puzzle-piece " aria-hidden="true"> </i> Projects</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
