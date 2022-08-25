import React from 'react'
import './Services.css'

const Services = () => {
  return (
    <>
    <div className='service-sec'>
    <h2>Our Services</h2>
    <div className='service-p'>
    <p>Gearing you up with the needed information to sharpen your career goals</p>
    <p>both home and abroad.</p>
    </div>
        <div className="main-service-cont">
        <div className='service-container'>
            <div className='service-left'>
                <img src="./images1/business.png" alt="" />
            </div>
            <div className='service-right'>
                <h1>01</h1>
                <h3><span>B</span> -Business</h3>
                <li>Through precise steps and concise strategies, we can help take your  business idea to success.</li>
                <li>We facilitate the establishment of your business outside your country of residence.</li>
                <li>The foster the expansion of your business on a global level.</li>
                
            </div>
        </div>
        <div className='service-container even'>
            <div className='service-left'>
                <h1>02</h1>
                <h3><span>W</span> -Work</h3>
                <li>We can assist you on your journey to finding the right career path.</li>
                <li>We can guide you through the possibility of practicing overseas with our career advising programs.</li>
                <li>We coach you through the job acquisition process, from writing your CV to handling the interview</li>
            </div>
            <div className='service-right' >
                <img src="./images1/work.png" alt="" />
            </div>
        </div>
        <div className='service-container'>
            <div className='service-left'>
                <img src="./images1/travel.png" alt="" />
            </div>
            <div className='service-right'>
                <h1>03</h1>
                <h3><span>T</span> -Travel</h3>
                <li>We provide you with accurate travel updates and information regularly.</li>
                <li>We help you settle on a destination based on your reason for travelling.</li>
                <li>We make easy flight and accomodation bookings for your vacation or business trip.</li>
                <li>We assist you in acquiring your visa to any country of your choice</li>
                <li>We train you to go through the travel process correctly on your own</li>
                
            </div>
        </div>
        <div className='service-container even'>
            <div className='service-left'>
                <h1>04</h1>
                <h3><span>E</span> -Education</h3>
                <li>We gather first-hand information on schools abroad for students looking to study there.</li>
                <li>We also thoroughly research local schools located outside Africa for interested students.</li>
                <li>We help students choose the right university according to their budget and chosen course.</li>
                <li>We source fully and partially funded scholarship programs for various degree levels for students.</li>
                <li>We can carry out the university application on your behalf upon request.</li>
                <li>We provide courses and training to foster your upskilling in your field.</li>
            </div>
            <div className='service-right' >
                <img src="./images1/education.png" alt="" />
            </div>
        </div>
        <div className='service-container'>
            <div className='service-left'>
                <img src="./images1/consultancy.png" alt="" />
            </div>
            <div className='service-right'>
                <h1>05</h1>
                <h3><span>C</span> -General Consultancy</h3>
                <li>Regardless of your profession or area of expertise, we carry out research on your behalf for your project.</li>
                
                
            </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default Services