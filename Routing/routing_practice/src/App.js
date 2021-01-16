import React from 'react';
import './App.css';

import {Router} from '@reach/router';

import Home from './components/Home';
// import Hello from './components/Hello';
import Colors from './components/Colors';
import Number from './components/Number';


function App() {
  return (
    <div className="App">
      {/* will search for exact match, if no match will fall into the :value */}
      <Router>
        <Number path="/:value"/>
        <Home path="/Home"/>
        <Colors path="/:value/:color1/:color2"/>
      </Router>
      
    </div>
  );
}

export default App;
