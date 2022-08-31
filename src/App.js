import React from 'react'

import './index.css';

import { Routes, Route } from "react-router-dom";
import About from './components/About';
import Blog from './components/Blog';
// import Who from './components/Who';
// import Services from './components/Services';
// import Location from './components/Location';
// import Career from './components/Career';
import Home from './components/Home';

const App = () => {
  return (
    <div>
      
      
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path = 'aboutpage' element= {<About/>}/>
        <Route path = 'blogpage' element= {<Blog/>}/>
      </Routes>
    </div>
  )
}

export default App