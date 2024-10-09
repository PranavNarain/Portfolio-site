import React from 'react'
import "./MobileNav.css"
import { Link } from 'react-scroll'

const MobileNav = ({isOpen, toggleMenu}) => {
  return <>
    <div className={`mobile-menu ${isOpen ? "active" : ""}`}
    onClick={toggleMenu}
    >
        <div className="mobile-menu-container">
            <img className='logo' src="./assets/images/logo.svg" alt=""/>
            <ul>
            <li>
                        <Link to="hero" smooth={true} offset={-100} duration={500} className='menu-item'>
                        Home
                    </Link> 
                    </li>
                    <li>
                        <Link to="skills" smooth={true} offset={-100} duration={500} className='menu-item'>
                        Skills
                    </Link>
                    </li>
                    <li>
                    <Link to="workex" smooth={true} offset={-100} duration={500} className='menu-item'>
                        Work Experience
                    </Link>
                    </li>
                    <li>
                    <Link to="contact" smooth={true} offset={-100} duration={500} className='menu-item'>
                        Contact Me
                    </Link>
                    </li>
            </ul>
        </div>
    </div>
  </>
};

export default MobileNav