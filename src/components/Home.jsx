import React from 'react'
import Who from './Who';
import Services from './Services';
import Location from './Location';
import Career from './Career';
import Navbar from './Navbar';
import Form from './Form';
import Contact from './Contact';


const Home = () => {
  return (
    <div>

      <Navbar/>
      <Who/>
      <Services/>
      <Location/>
      <Career/>
      {/* <Form/> */}
      <Contact />
    </div>
  )
}

export default Home