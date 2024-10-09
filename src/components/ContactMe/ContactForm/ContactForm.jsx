import React from 'react'
import './ContactForm.css'
import Swal from 'sweetalert2'

const ContactForm = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "29d799f1-e465-47ee-88e6-9ee443cd06db");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Good job!",
        text: "Message sent succesfully!",
        icon: "success"
      });
    }
  };
  return (
    <div className='contact-form-content'>
        <form onSubmit={onSubmit}>
            <div className='name-container'>
                <input type="text" name="firstname" placeholder='First Name' required/>
                <input type="text" name="lastname" placeholder='Last Name' />
            </div>
                <input type="text" name="email" placeholder='Email' required/>
                <textarea type="text" name="message" placeholder='Message' rows={3} required/>

                <button>SEND</button>
        </form>
    </div>
  )
}

export default ContactForm