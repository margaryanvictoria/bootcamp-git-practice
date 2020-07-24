import React from 'react';
import Home from './components/Home';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { About } from './components/About';

import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import Contact from './components/Contact';

export default function App() {
    return (
        <div>
            Hello World!
            <Header />
            <Router>
                <ul>
                    <li>
                        <Link to="/Home"> Home </Link>
                    </li>
                    <li>
                        <Link to="/About"> About Us </Link>
                    </li>
                    <li>
                        <Link to="/Contact"> Contact </Link>
                    </li>
                </ul>
                
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/Home"/>
                    </Route>
                    <Route exact path="/Home" component={Home}/>
                    <Route exact path="/About" component={About}/>
                    <Route exact path="/Contact" component={Contact}/>
                </Switch> 
            </Router>  
            <Footer />
        </div>
    )
}
