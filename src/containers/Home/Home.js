import { Link } from "react-router-dom";
import Role from "../../components/Role/Role";
import classes from './Home.module.css';
import nishatImage from './Nishant.png'

const Home = props => {
    return (
        <>
            <img src={nishatImage} alt="Nishant" className={classes.profileImage}></img>
            <div className={classes.container}>
                <h3>Hi, My name is <span style={{color: '#ffb400', fontSize: 23, fontFamily: 'Nunito'}}>Nishant</span></h3>
                <h1 style={{fontFamily: 'Nunito'}}>I'm A <Role /></h1>
                <p>
                    I'm a Freelance UI/UX Designer and Developer based in Dehli, India.
                    I like to build <span style={{color: '#ffb400'}}>logic behind the seens </span>
                    rather than using any ready made tool.
                    I have also some experience of game development and 3-d modeling.
                </p>
                <div className={classes.links}>
                    <div className={classes.socialLinks}>
                        <a href="https://github.com/NishantTheProgrammer"><i className="fab fa-github"></i></a>
                        <a href="https://www.instagram.com/nishanttheprogrammer/"><i className="fab fa-instagram"></i></a>
                        <a href="https://twitter.com/NishantThePro"><i className="fab fa-twitter"></i></a>
                        <a href="https://www.facebook.com/NishantTheProgrammer"><i className="fab fa-facebook"></i></a>
                        <a href="https://www.youtube.com/channel/UCjmuqTknm5mI51zDN116bfA"><i className="fab fa-youtube"></i></a>
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