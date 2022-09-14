// All components
import './App.css';
import Navigation from './Components/Navigation';
import TextForm from './Components/TextForm';
import Alerts from './Components/Alerts';
import React, { useState } from "react";

function App() {
  // Setting Dark and Light Modes
  const [mode, setMode] = useState('light')
  function toggleMode (){
    if (mode === 'light'){
      setMode('bg-dark text-white');
      document.body.style.backgroundColor = '#042743';
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
    }
  }
  // Setting Alerts
  const [alert, setAlert] = useState(null);


      setTimeout(() => {
          setAlert(null);
      }, 1500);
  return (
    <div className="App">
      <Navigation mode={mode} toggle={toggleMode}/>
      <Alerts alert ={alert}/>
      <TextForm alert ={alert} setAlert= {setAlert}/>
    </div>
  );
}

export default App;
