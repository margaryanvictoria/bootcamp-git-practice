import React from 'react';
import './App.css';
import TwitchSim from './components/TwitchSim';
import State from './components/State';
import ClassVFunc from './components/ClassVFunc';


function App() {
    //return ( <TwitchSim/> );
    return(
        <div>
            <State/>
            <State/>
            <ClassVFunc/>
        </div>
    );
}

export default App;