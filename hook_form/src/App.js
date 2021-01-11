import React, { useState } from 'react';
import './App.css';

import UserForm from './components/UserForm.jsx';

function App() {
  const [ state, setState ] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  return (
    <div className="App">
      <UserForm userInput={state} setInputs={setState} />
    </div>
  );
}

export default App;
