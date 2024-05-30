import React from 'react'
import './Contact.css';
function Contact() {
  return (
    <>
    <br/><br/>
      <div className='container' data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" id="contact">
        <h1 id="c">CONTACT ME :-</h1>
        <div>
          <tr>
            <th>NAME :- MOHAN RAJPUT</th>
          </tr>
          <tr>
            <th>MOBILE NO. :- 6261541088</th>
          </tr>
          <tr>
            <th>Email :- mrmohanrajput830@gmail.com</th>
          </tr>
        </div>
        <div className='contact-icon'>
            <a href='https://www.facebook.com/mohanrajput.monu.1' className='items-icon'><i class="fa-brands fa-facebook"></i></a>
            <a href='https://www.instagram.com/h_a_r_t_hacker__45?igsh=MWk0NGdycjV0ZjZhZA==' className='items-icon'><i class="fa-brands fa-instagram"></i></a>
            <a href='https://www.linkedin.com/in/mohan-rajput-200b7829a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' className='items-icon'><i class="fa-brands fa-linkedin"></i></a>
            <a href='https://x.com/moanu45?t=5WdLxaiPZhZ7v-9q5Ih1dQ&s=08' className='items-icon'><i class="fa-brands fa-square-x-twitter"></i></a>
            <a href='https://github.com/mohan-rajput' className='items-icon'><i class="fa-brands fa-github"></i></a>
            <a href='https://mail.google.com/mail/u/0/' className='items-icon'><i class="fa-solid fa-square-envelope"></i></a>
        </div>
      </div>
    
    </>
  )
}

export default Contact
