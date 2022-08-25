import React from 'react'
import './Who.css'

const Who = () => {
  return (
    <>
    <div className='who-section'>
    <h2>Who are we?</h2>
    <div className='who-container'>
     
     <div className='who-left' >
        <img src="./images1/who.png" alt="" />
     </div>  
     <div className='who-right'>
        <div className='who-right-sub'>
           
             <p>Elaborate <span>BTWEC</span> is a consultancy agency</p>
             <p>dedicated to providing you with webinars, courses, </p>  
             <p>and training that broaden your perspective and </p>
             <p>literally take you places.</p>
            <div className='second-p'>
             <p>We open your eyes to the infinite career,</p>
             <p>education, and business opportunities available to </p>
             <p>you in and most importantly outside of your </p>
             <p>country of residence.</p>
             </div>
            
        </div>
     </div> 
    </div>
    </div>
    </>
  )
}

export default Who