import React from 'react'
import './Career.css'

const Career = () => {
  return (
    <>
    <div className='career-section' id='career'>
     <div className='career-heading'>
      <h2>Career</h2>  
      <header>We are constantly seeking hard-working and like minded individuals to join our team of talented professionals.</header>
      <p>Think you're a perfect fit? Register your interest.</p>
      </div>
        <div className='career-container'>

            <div className='career-flexbox' >
                <div className='flex-left' >
                <img className='career-grid' src="./images1/grid1.png" alt="" />
                </div>
                <div className='flex-right'>
                <img className='career-grid'   src="./images1/grid2.png" alt="" />
                </div>
            </div>
            <div className='career-sub-container'>
            
            <div className='career-grid3'>
                <img  src="./images1/grid3.png" alt="" />
            </div>
            
            <div className='career-grid5'>
                <img className='career-grid' src="./images1/grid5.png" alt="" />
            </div>
            
            <div className='career-grid4'>
                <img className='career-grid' src="./images1/grid4.png" alt="" />
            </div>
            
            
            <div className='career-grid6'>
                <img src="./images1/grid6.png" alt="" />
            </div>
            </div>
        </div>
    </div>
    <div className='career-btn'>
        <p>Register your interest</p>
    </div>
    </>
  )
}

export default Career