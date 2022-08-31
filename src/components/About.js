import React from 'react'
import  './About.css'
import { useNavigate } from 'react-router-dom'

import { FaRegArrowAltCircleLeft } from 'react-icons/fa'

const About = () => {
  const Navigation = useNavigate()
  
  return (
    <>
    <div className='about-sec'>
    <div className='about-icon'>
    <FaRegArrowAltCircleLeft  onClick={() => Navigation(-1)}/>
    </div>
    <div className='about-container'>
      <div className='about-left'>
        <img src="./images1/about.png" alt="" />
      </div>
      <div className='about-right'>
        <div>
          <h2>About us</h2>
        </div>
        <div>
            <div className='about-p1'>
           <p>Elaborate BWTEC is an international consultancy agency focused on facilitating the acquisition of accurate information in your career. In 2019, the idea of exposing people to the endless possibilities available to them regardless of their field was born.</p>
           </div>
           <div className='about-p2'>
           <p>Untapped opportunities are abundant both in the personal and business sectors, especially those abroad. By going out of our way to research, travel, and build our library of experience, to build that gap and provide you with all of the necessary information in your profession.</p>
           </div> 
           <div className='about-p3'  >
           <p>At Elaborate BWTEC, we pride ourselves on the promotion of young talents. We strongly believe that there is a wealth of ability in these younger generations that are yet to be tapped in Africa and the world in general.</p>
          </div>
        </div>
      </div>
      
    </div>
    </div>
    
    </>
  )
}

export default About