import React, { useState } from 'react';
import './App.css';


import BoxDisplay from './components/BoxDisplay.jsx';
import ColorForm from './components/ColorForm';

function App() {
    const [boxes, setboxes] = useState([])

    return (
    <div className="App">
        <h1>Box Generator</h1>
        <hr/>
        <ColorForm boxes={boxes} setboxes={setboxes} />
        <BoxDisplay boxes={boxes} />

    </div>
    );
}

export default App;
