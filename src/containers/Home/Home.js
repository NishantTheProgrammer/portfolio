import { Fragment, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Role from "../../components/Role/Role";
import classes from './Home.module.css';


const Home = props => {
    return (
        <Fragment>
            <img src="Nishant.png" alt="Nishant" className={classes.profileImage}></img>
            <div className={classes.container}>
                <h3>Hi, My name is <span style={{color: '#ffb400', fontSize: 23, fontFamily: 'Nunito'}}>Nishant</span></h3>
                <h1 style={{fontFamily: 'Nunito'}}>I'm A <Role /></h1>
                <p>
                    I'm a Freelance UI/UX Designer and Developer based in Dehli, India.
                    I like to build <span style={{color: '#ffb400'}}>logic behind the seens </span>
                    rather than using any ready made tool.
                    I have also some experience of game development and 3-d modeling.
                </p>
                <div class={classes.links}>
                    <div class={classes.socialLinks}>
                        <a href="https://github.com/NishantTheProgrammer"><i class="fab fa-github"></i></a>
                        <a href="https://www.instagram.com/nishanttheprogrammer/"><i class="fab fa-instagram"></i></a>
                        <a href="https://twitter.com/NishantThePro"><i class="fab fa-twitter"></i></a>
                        <a href="https://www.facebook.com/NishantTheProgrammer"><i class="fab fa-facebook"></i></a>
                        <a href="https://www.youtube.com/channel/UCjmuqTknm5mI51zDN116bfA"><i class="fab fa-youtube"></i></a>
                    </div>
                    <div class={classes.btn}>
                        <Link to="/about"><i class="fa fa-address-card" aria-hidden="true"> </i> More about me</Link>
                        <Link to="/projects"><i class="fa fa-puzzle-piece " aria-hidden="true"> </i> Projects</Link>
                    </div>
                </div>
                
            </div>
        </Fragment>
    );
};

export default Home;