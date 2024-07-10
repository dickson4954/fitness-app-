import './App.css';
import React from 'react';
// import { BrowserRouter as Router, Route, } from 'react-router-dom';

import Home from './Componets/Homepage';
import Navbar from './Componets/Navbar';
function App() {
  return (
    <div className="App">
      
      
      <Navbar/>
      <Home/> 
    
    </div>
  );
}

export default App;
