import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className='hero-container' id="hero">
        <div className='hero-content'>
            {/* <h2>Hello, I'm </h2> */}
            <h3>Hello, I'm <br/>DNL. Pranav Narain!</h3>
            <p>A Passionate Full-Stack Web Developer based in India, specializing in building dynamic and scalable web applications with React, Node.js, and Express. A 2023 Computer Science graduate, I have hands-on experience in developing tailored solutions through my own web development service, TheWebLands, I bring a client-focused approach to every project. I have also completed internships and projects that sharpened my skills in both front-end and back-end development. I’m always eager to solve new challenges and explore emerging tech. Let’s build something amazing together!</p>
        </div>
        <div className='hero-img'>
            <div>
                <div className='tech-icon'>
                    <img src="./assets/images/logo192.png" alt="" />
                </div>
                    <img src="./assets/images/logo11.png" alt="" />                            
            </div>
            <div>
                <div className='tech-icon'>
                    <img src="./assets/images/html.png" alt="" />
                </div>
                <div className='tech-icon'>
                    <img src="./assets/images/css-3.png" alt="" />
                </div>
                <div className='tech-icon'>
                    <img src="./assets/images/js.png" alt="" />
                </div>
                <div className='tech-icon'>
                    <img src="./assets/images/sql.png" alt="" />
                </div>
                <div className='tech-icon'>
                    <img src="./assets/images/postgre.png" alt="" />
                </div>
            </div>    

        </div>
    </section>
  )
}

export default Hero