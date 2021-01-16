import React from 'react';
import './App.css';

import {Router} from '@reach/router';

import Home from './components/Home';
import People from './components/People';
import Planets from './components/Planets';
import Starships from './components/Starships';
import ErrorPage from './components/ErrorPage';

function App() {
  return (
    <div className="App">
      <h1>STARWARS API</h1>
        {/* Having Home above the router has it appear on every page without passing it */}
        <Home />
      <Router>
        <People path = "/people/:id"/>
        <Planets path = "/planets/:id"/>
        <Starships path = "/starships/:id"/>
        <ErrorPage path = "/error"/>
      </Router>
      
    </div>
  );
}

export default App;
