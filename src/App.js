import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react'
import Alert from './components/Alert';

// import About from './components/About';
//Theme settings
function App() {
  const [mode, setMode] = useState('light')
  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Light mode has been enabled','success')

    }
    else {
      setMode('dark')
      document.body.style.backgroundColor = '#182d33'
      showAlert('Dark mode has been enabled','success')
    }
  }
  //Alert settings
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert( {
      msg: message,
      types: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);

  }

  return (
    <>
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
        <Textform showAlert={showAlert} heading='Enter text to analyse' mode={mode} />
        {/* <About></About> */}
      </div>

    </>
  );
}

export default App;
