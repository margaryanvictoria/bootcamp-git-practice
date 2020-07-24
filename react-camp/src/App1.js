import React from 'react';
import './App.css';

function App() {
  function clickHandler() {
    console.log('clicked');
  }

  return (
    <div className="App">
      <Greeting name="Kevin" callback={this.clickHandler}/>
      <Greeting age="27" />
    </div>
  );
}

export default App;
