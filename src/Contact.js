import React from 'react';
import "./contact.css";

function Contact() {
  return (
    <div>
      <h1>My Contact Details</h1>
      <p>+2349076498114</p>
      <p>Johnuduak035@gmail.com</p>
      <form action='mailto:Johnuduak035@gmail.com' method='post' encType='text/plain'>
        <label className='sb'>Your Name:</label>
       <input className='box' type='text' placeholder='Your name'/>
       <br></br>
        <label className='sb' >Your Email</label>
        <input className='box' type='email' placeholder='Your email'/>
        <br></br>
        <label className='sb'>Your Message</label>
        <textarea className='big_box' placeholder='Your Message'/>
        <input className='sub' type='submit'/>
      </form>
    </div>
  )
}

export default Contact
