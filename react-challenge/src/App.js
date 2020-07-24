import React from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Redirect, Route, Switch} from 'react-router-dom';
import AboutMe from './components/pages/AboutMe';
import {Home as HomePage} from './components/pages/Home';
import Activities from './components/pages/Activities';
import ContactMe from './components/pages/ContactMe';

function App() {
  return (
    <div className="App">
      <h1> Hi there! </h1>
      <Router>
        <Link to="/Home"> Home </Link>
        <br/>
        <Link to="/AboutMe"> About Me </Link>
        <br/>
        <Link to="/ContactMe"> Contact Me </Link>
        <br/>
        <Link to="/Activities"> Activities </Link>
        <br/>

        <Switch>
          <Route exact path="/">
            <Redirect to="/Home"/>
          </Route>
          <Route exact path="/Home" component={HomePage}/>
          <Route exact path="/AboutMe" component={AboutMe}/>
          <Route exact path="/Activities" component={Activities}/>
          <Route exact path="/ContactMe" component={ContactMe}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
