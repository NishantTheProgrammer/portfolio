import './App.css';
import { Component } from 'react';
import About from './containers/About/About';
import Home from './containers/Home/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import projects from './containers/MyProjects/MyProjects';
import Nav from './components/Nav/Nav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={projects} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
