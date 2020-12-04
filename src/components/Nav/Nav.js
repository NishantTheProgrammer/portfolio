import { Component } from 'react';
import { Link } from 'react-router-dom';
import classes from './Nav.module.css';

class Nav extends Component {
    state = {
        open: false
    }
    render() {
        return (
            <nav className={classes.nav}>
                <Link
                id={classes.hamburger} 
                onClick={() => this.setState(prev => ({open : !prev.open}))}
                >{this.state.open ? <i className="fas fa-times" style={{fontSize: 22}}></i> : <i className="fas fa-bars"></i>}</Link>
                <Link to="/"  className={this.state.open ? classes.open : ''}>
                    <i className="fa fa-home" aria-hidden="true"></i><span>Home</span>
                </Link>
                <Link to="/projects" className={this.state.open ? classes.open : ''}><i className="fa fa-puzzle-piece"
                        aria-hidden="true"></i><span>Projects</span>
                </Link>
                <Link to="/about" className={this.state.open ? classes.open : ''}>
                    <i className="fa fa-address-card" aria-hidden="true"></i><span>About</span>
                </Link>
            </nav>
        )
    }
}

export default Nav;