import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt,faEnvelope,faLocationDot,faPhoneVolume,faUserCircle } from '@fortawesome/free-solid-svg-icons';
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import './Contact.css'
import Navbar from '../../../components/Navbar';
const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "ec332ed3-7cf7-4372-8683-b3887bd5badd");

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
      console.log("Success", res);
    }
  };

  return (
    <div className='contact-main'>
      <Navbar/>
      <div className="message-cont p-2 my-4 ">
       <div className="talk ">
            <div className="sec-1">
              <h1>Let's talk</h1>
            <p className='talk-p'>hello sir if you have any query connect with me here my Email id text me i will be their </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} className='tpurple me-2'/>
              bisworanjan34@gmail.com</p>
            <p>
              <FontAwesomeIcon icon={faPhoneVolume} className='tpurple me-2'/>
              +91-8917377258</p>
            <p>
              <FontAwesomeIcon icon={faPhoneVolume} className='tpurple me-2'/>
              +91-7978092266</p>
            <p>
              <FontAwesomeIcon icon={faLocationDot} className='tpurple me-2'/>
              india</p>
            </div>
       </div>
       <div className="message ">
          <div className="sec-2">
            <h1>Let's message</h1>
             <form action="" onSubmit={onSubmit}>
               <label>Your Name</label><br />
               <input type="text"placeholder='Enter your name'name='name' required /><br />
               <label>Your Email</label><br />
               <input type="text"placeholder='Enter your email'name='email'  required/><br />
               <label>write your message here</label><br />
               <input type="text" placeholder='Enter your message...'className='yourm'name='message' required /><br />
               <button type='submit text-white'>Submit</button>
             </form>
          </div>
       </div>
       
      </div>

     <div className=" contact-div ">
     
        <div className="user-cont fw-bold text-center">
        <p className='display-2 tpurple'><FontAwesomeIcon icon={faUserCircle}/></p>
        <p className='tpurple'>contact no: 7978092266</p>
        </div>
          
        <div className="user-cont  fw-bold text-center">
         <p className='display-2 tpurple'> <FontAwesomeIcon icon={faAt} /></p>
          <p className='tpurple'>gmail: bisworanjan34@gmail.com</p>
        </div>

        <div className="user-cont  fw-bold text-center">
       <p className='display-2 tpurple'> <FontAwesomeIcon icon={faWhatsapp}/></p>
        <p className='tpurple'>contact no: 8917377258</p>
        </div>

      </div>
    
     <h5 className='text-center'>Country India</h5>
     <p className='text-center'>Conditions of Use & 
         Privacy NoticeInterest-Based Ads</p>
    <p className='text-center'> © 1996-2024,Profile.com, Inc.</p>
    <p className='text-center'> Made by <b className='tpurple'>Bisworanjan</b></p>
    </div>
  )
}

export default Contact
