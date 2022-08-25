/* eslint-disable no-const-assign */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import Alert from "./Components/Alert";
import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  const toggleMode = () => {
    if (mode == 'light') {
      setMode('dark')
      document.body.style.backgroundColor = "black";
      showAlert("dark Mode is enabled", "success")
      document.title = "TextUtils- Dark mode";
    } else {
      setMode('light')
      document.body.style.backgroundColor = "white";
      showAlert("light Mode is enabled", "success")
      document.title = "TextUtils- Light mode";
    }
  }
  return (
    <>
      <Router>
        <Navbar
          title="Textutils"
          aboutText="About Us"
          mode={mode}
          toggleMode={toggleMode}
        />
        {/* alert={alert} is passed here to return null*/}
        {<Alert alert={alert} />}
        <div className="container my-3">
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <TextForm
                showAlert={showAlert}
                heading=" Enter your text to analyze "
                mode={mode}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}
export default App;
