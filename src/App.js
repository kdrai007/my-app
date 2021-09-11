import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react'

// import About from './components/About';

function App() {
  const [mode, setMode] = useState('light')
  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light')
      document.body.style.backgroundColor='white'
      
    }
    else {
      setMode('dark')
      document.body.style.backgroundColor='grey'
    }
  }
  return (
    <>
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
      <div className="container">
        <Textform heading='Enter text to analyse' />
        {/* <About></About> */}
      </div>

    </>
  );
}

export default App;
