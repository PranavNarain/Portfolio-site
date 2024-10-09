import React from 'react'
import './ContactMe.css'
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'
import ContactForm from './ContactForm/ContactForm'

const ContactMe = () => {
  return (
    <section className='contact-container' id="contact">
        <h5>Contact Me</h5>

        <div className='contact-content'>
            <div style={{flex: 1}}>
                <ContactInfoCard
                    iconUrl="./assets/images/gmail.png"
                    text="pranavdevarakonda18@gmail.com"
                 />
                <ContactInfoCard
                    iconUrl="./assets/images/linkedin.png"
                    text="https://www.linkedin.com/in/pranav-devarakonda-538633203/"
                 /> 
            </div>

            <div style={{flex: 1}}>
              <ContactForm />
            </div>
        </div>
    </section>
  )
}

export default ContactMe