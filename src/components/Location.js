import React from 'react'
import { FaMapMarkerAlt } from "react-icons/fa";
import './Location.css'

const Location = () => {
  return (
    <>
    <div className='location-sec'>
     <div className='location-container'>
        <div className='location-left'>
            <img src="./images1/globe.png" alt="" />
        </div>
        <div className='location-right'>
            <div className='lrs'>
            <h2>Location</h2>
            <h4>We are committed to helping people across the world but are physically located in...</h4>
            
            </div>
            <div className='divo2'>
            <FaMapMarkerAlt className='hero-icon2' style={{ color: "#FFFFFF" }}/>
            <p>London</p>
            </div>
            <div className='divo2'>
            <FaMapMarkerAlt  className='hero-icon2'  style={{ color: "#FFFFFF" }}/>
            <p>United states of America</p>
            </div>
            <div className='divo2'>
            <FaMapMarkerAlt   className='hero-icon2' style={{ color: "#FFFFFF" }}/>
            <p>Dubai</p>
            </div>
            <div className='divo2'>
            <FaMapMarkerAlt  className='hero-icon2'  style={{ color: "#FFFFFF" }}/>
            <p>Qatar</p>
            </div>
            <div className='divo2'>
            <FaMapMarkerAlt   className='hero-icon2' style={{ color: "#FFFFFF" }}/>
            <p>South Africa</p>
            </div>
            <div className='divo2'>
            <FaMapMarkerAlt  className='hero-icon2' style={{ color: "#FFFFFF" }}/>
            <p>Turkey</p>
            </div>
        </div>
     </div>
    </div>
    </>
  )
}

export default Location

