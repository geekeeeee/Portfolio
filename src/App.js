import React from "react";
import Home from "./Routes/Home"
import About from "./Routes/About"
import Projects from "./Routes/Projects"
import Contact from "./Routes/Contact"
import {Route,Routes} from "react-router-dom"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </>
  );
}

export default App;
