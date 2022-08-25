import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import image2 from "../images/hero-pic.png";
import { FaCheckCircle, FaWifi, FaBars, FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";

const Navbar = () => {

  const [showNav, setShowNav] = useState(false)

  return (
    <>
      <section className="header">
        <div className="navbar-container">
        <div className="navbar">
          <div className="navLogo">
            <img className="navLogoImg" src="./images1/Elaborate.png" alt="" />
          </div>
          <ul className="nav-menu pc" >
            <li className="nav-item">
              {" "}
              <a href=""> Home</a>
            </li>
            <li className="nav-item">
              {" "}
              <a href="">Services</a>
            </li>
            <NavLink className="nav-item" to="/aboutpage">
              About us
            </NavLink>
            <li className="nav-item">
              {" "}
              <a href="">Career</a>
            </li>
            <NavLink className="nav-item" to="/blogpage">
              Blog
            </NavLink>
            <li className="nav-item">
              <a href="">Contact</a>
            </li>
          </ul>
          <ul className="nav-menu-location">
            <li className="nav-item">
              <a href="">Location</a>
            </li>
          </ul>

          {/* Mobile nav */} 

        {
          showNav && <motion.ul className="mobile-nav"
          initial={{y: "60px", opacity: '0'}}
          animate={{y: 0, opacity: '1'}}
          
          >
          <li className="mobile-item">
            <a href=""> Home</a>
          </li>
          <li className="mobile-item">
            <a href="">Services</a>
          </li>
          <li className = "mobile-item">
          <NavLink to="/aboutpage">
            About us
          </NavLink>
          </li>
          
          <li className="mobile-item">
            <a href="">Career</a>
          </li>
          <li className="mobile-item">
          <NavLink  to="/blogpage">
            Blog
          </NavLink>
          </li>
          
          <li className="mobile-item">
            <a href="">Contact</a>
          </li>
          <li className="mobile-item">
            <a href="">Location</a>
          </li>
        </motion.ul>
        }
        
                     
        { showNav ? <FaTimes className="burger"
            onClick={()=> setShowNav(!showNav)}/> : <GiHamburgerMenu className="burger"
            onClick={()=> setShowNav(!showNav)}
          /> }
          
        </div>
        </div>
     
       <div className="hero">
        <div className="hero-container">
          <h1>Accurate Travel</h1>
          <h1>
            <span>Information</span>
          </h1>
          <h1>At Your Fingertips</h1>
          <div className="hero-p1">
            <p>Build your career overseas in any field of your choice with</p>
            <p>our detailed resources and bespoke assistance.</p>
          </div>
          <div className="hero-p2">
            <p>We source factual information that facilitates your travel</p>
            <p>objectives in:</p>
          </div>
          <div className="hero-p3">
            <div className="divo">
              <FaCheckCircle className="hero-icon" style={{ color: "#FFA704" }} />
              <p>Business</p>
            </div>
            <div className="divo">
              <FaCheckCircle className="hero-icon" style={{ color: "#FFA704" }} />
              <p>Work</p>
            </div>
            <div className="divo">
              <FaCheckCircle className="hero-icon" style={{ color: "#FFA704" }} />
              <p>Education sectors</p>
            </div>
          </div>
          
        </div>
        <button className="hero-btn">Contact us</button>
        </div>
      </section>
    </>
  );
};

export default Navbar;
