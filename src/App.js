import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react'
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

//Theme settings
function App() {
  const [mode, setMode] = useState('light')
  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Light mode has been enabled', 'success')
      document.title = 'Textutils-Light Mode'

    }
    else {
      setMode('dark')
      document.body.style.backgroundColor = '#182d33'
      showAlert('Dark mode has been enabled', 'success')
      document.title = 'Textutils-Dark Mode'
    }
  }
  //Alert settings
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      types: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);

  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">

          <Switch>
            <Route exact path="/about">
              <About mode={mode}/>
            </Route>
            <Route exact path="/">
              <Textform showAlert={showAlert} heading='Enter text to analyse' mode={mode} />
            </Route>
          </Switch>
          {/* <About /> */}
        </div>
      </Router>

    </>
  );
}

export default App;
