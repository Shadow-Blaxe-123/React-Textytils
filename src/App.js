import logo from './logo.svg';
import './App.css';
import Navigation from './Components/Navigation';
import TextForm from './Components/TextForm';
import Alerts from './Components/Alerts';
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState('light')
  function toggleMode (){
    if (mode === 'light'){
      setMode('bg-dark text-white');
      console.log('dark');
      document.body.style.backgroundColor = '#042743';
    }
    else{
      setMode('light')
      console.log('light')
      document.body.style.backgroundColor = 'white';
    }
  }
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
