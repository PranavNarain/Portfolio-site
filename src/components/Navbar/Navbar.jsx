import React,{useState} from 'react'
import './Navbar.css'
import { Link } from 'react-scroll'

import MobileNav from './MobileNav/MobileNav';


const Navbar = () => {

    const[openMenu,setOpenMenu]=useState(false);
    const toggleMenu=()=>{
        setOpenMenu(!openMenu);
    };

  return (
    <>
        <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
        <nav className="nav-wrapper">
            <div className="nav-content">
                <img className="logo" src="./assets/images/logo.svg" alt="" />

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
                    {/* <li>
                        <a className='menu-item'>Contact Me</a>
                    </li> */}

                    {/* <button className='contact-btn' onClick={() =>{ }}>Contact me</button> */}
                    
                    
                </ul>
                <button class="menu-btn" onClick={toggleMenu}>
                    <span class={"material-symbols-outlined"}
                    style={{fontSize:"1.8rem"}}
                    >
                        {openMenu? "x" : "="}
                    </span>
                </button>
            </div>
            
        </nav> 
   </>
  )
}

export default Navbar