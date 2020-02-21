import React from 'react';
import './App.css';
import NavBar from './Nav';
import JumboTron from './Jumbotron';
import CharContainer from './CharContainer';

const App = () => {

  return (
    <div className="App">
      <NavBar/>
      <JumboTron/>
      <CharContainer/>
    </div>
  );
}

export default App;
