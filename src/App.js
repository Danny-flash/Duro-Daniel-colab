import React from 'react'
import Navbar from './components/Navbar';
import './index.css';
import { Routes, Route } from "react-router-dom";
import About from './components/About';
import Blog from './components/Blog';
import Who from './components/Who';
import Services from './components/Services';
const App = () => {
  return (
    <div>
      
      <Navbar/>
      <Who/>
      <Services/>
      <Routes>
        <Route path = 'aboutpage' element= {<About/>}/>
        <Route path = 'blogpage' element= {<Blog/>}/>
      </Routes>
    </div>
  )
}

export default App