import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      showAlert(null);
    }, 2000);
  }

  const handleModeCLick = () => {
    if (mode === 'light') {
      setMode('dark');
      let colorPicker = document.getElementById('darkModeColor')
      let color = colorPicker.value;
      document.body.style.backgroundColor = color;
      showAlert("Dark mode enabled!!","success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled!!","success");
    }
  }
  return (
    <>
      {/* <BrowserRouter> */}
        <Navbar homeText="TextUtils" aboutText="About us" mode={mode} handleModeClickFn={handleModeCLick}></Navbar>
        <Alert alert={alert} />
        {/* <Routes> */}
          <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
          {/* <Route exact path='/' element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />} />
          <Route exact path='/about' element={<About />} /> */}
        {/* </Routes> */}
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
