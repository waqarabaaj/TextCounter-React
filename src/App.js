import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
// import About from "./Components/About";
import React, { useState } from "react";
import Alert from "./Components/Alert";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);

  }
  const toggleMode =()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been Enabled", "success");
      document.title = 'TextCounter - Dark Mode'
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode has been Enabled', 'success');
      document.title = 'TextCounter - Light Mode'
    }


  }
  return (
    <>
      {/* <Router> */}
      <Navbar title="TextCounter" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/> 
      <div className="container my-3">

      {/* <Routes> */}
      <TextForm showAlert={showAlert} heading="Enter your Text here" mode={mode}/>
        {/* /* <Route path="/About" element={<About />}></Route> */}

      {/* </Routes> */}
      {/* </Router> */}
    </div>
   </>
  );
}
export default App;
