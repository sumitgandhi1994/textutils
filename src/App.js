import { useState } from "react";
import "./App.css";
import About from "./components/about";
import Navbar from "./components/Navbar";
import TextForm from './components/TextForm'

function App() {

  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "gray";
    } else {
      setMode('light');
      document.body.style.backgroundColor = "white";
    }
  }

  return (
    <>
      <Navbar title="TextTutils2" aboutText="About TextTutils" mode={mode} toggleMode={toggleMode}></Navbar>
      {/* <Navbar></Navbar> */}

      <TextForm title="Eneter the text and analyze blow: " mode={mode}></TextForm>
      {/* <About></About> */}
    </>
  );
}

export default App;
