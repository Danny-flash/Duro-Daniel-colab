import React from 'react'
import Navbar from './components/Navbar';
import './index.css';
import { Routes, Route } from "react-router-dom";
import About from './components/About';
import Blog from './components/Blog';
import Hero from './components/Hero';

const App = () => {
  return (
    <div>
      
      <Navbar/>
      
      <Routes>
        <Route path = 'aboutpage' element= {<About/>}/>
        <Route path = 'blogpage' element= {<Blog/>}/>
      </Routes>
    </div>
  )
}

export default App