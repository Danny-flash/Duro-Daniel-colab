import './contact.css'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { BiPhoneCall } from 'react-icons/bi'
import { BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs'
import { MdOutlineMarkEmailUnread } from 'react-icons/md'

const Contact = () => {
  return (
    <section className='contact'>
         <div className="contact-container">
            <div className="contact-left">
                <form action="">
                    <div className="cont-name">
                        <label htmlFor="firstName">
                            First Name:
                            <input type="text" id='firstName' />
                        </label>
                        <label htmlFor="firstName">
                              Last Name:
                            <input type="text" />
                        </label>
                    </div>
                    <label htmlFor="">
                        Email:
                        <input type="email" />
                    </label>
                    <label htmlFor="">
                        Phone Number:
                        <input type="number" />
                    </label>
                    <label htmlFor="">
                        Message:
                        <textarea type="text" className='msg'/>
                    </label>
                    <button className='sub'>Submit</button>
                </form>
            </div>
            <div className="contact-right">
                <header>Contact us</header>
                <p>We're just a message away from guiding you through your path to local and overseas success. Reach out to us now!</p>

                <div className="contact-icons">
                    <div className="con-icon-left">
                    <div className="contact-icon">
                        <HiOutlineLocationMarker className='c-icon'/>
                        <p>Location</p>
                    </div>
                    <div className="contact-icon">
                        <BiPhoneCall className='c-icon'/>
                        <p>Phone</p>
                    </div>
                    <div className="contact-icon">
                        <MdOutlineMarkEmailUnread className='c-icon'/>
                        <p>Email</p>
                    </div>
                    </div>
                    <div className="con-icon-right">
                         <a href=""><BsFacebook /></a>
                         <a href=""><BsInstagram /></a>
                         <a href=""><BsLinkedin /></a>
                    </div>
                </div>
            </div>
         </div>
    </section>
  )
}

export default Contact