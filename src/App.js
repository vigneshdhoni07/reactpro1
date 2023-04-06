
import React, { useEffect, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  var lref=useRef()
  var [swi,setSwi]=useState("a1")
  var a1="App-logo"
  var a2="App-logo1"
  useEffect(()=>{
    setTimeout(()=>{
      lref.current.className=lref.current.value==="a1"?a2:a1
      swi==="a1"?setSwi("a2"):setSwi("a1")
      lref.current.value=swi
      
    },1000)
  },[swi,a1,a2])
  
  return (
    <div className="App">
      <header className="App-header">
        {/* <a href="https://github.com/vigneshdhoni07?tab=repositories">Modified By Vignesh</a> */}
        <h3> Modified By Vignesh </h3>
        <img src={logo} className={a1} alt="logo" ref={lref} value={swi}/>
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
