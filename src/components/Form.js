import React from 'react'
import './Form.css'

const Form = () => {
  return (
    <>
    <div className="form-sec">
    <div className='form-container'>
      <div className="form-left">
    
        <div className="form-left-container">
            <div>
                <span className='details'>First name</span>
                <input type="text" placeholder='Enter your First name' />
            </div>
            <div>
                <span className='details'>Last name</span>
                <input type="text" placeholder='Enter your Last name' />
            </div>
            <div>
                <span className='details'>Email</span>
                <input type="text" placeholder='Enter your Email' />
            </div>
            <div>
                <span className='details'>Number</span>
                <input type="text" placeholder='Enter phone number' />
            </div>
            <div>
                <span className='details'>Message</span>
                <input type="text" placeholder='Send us a message' />
            </div>
        </div>
      </div> 
      <div className="form-right">
        <h2>Contact us</h2>
        <p>We're just a message away from guiding you through your path to local and overseas success. Reach out to us now!</p>
      </div> 
    </div>
    </div>
    </>
  )
}

export default Form