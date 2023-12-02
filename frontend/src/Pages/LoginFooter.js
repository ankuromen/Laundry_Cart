import React from 'react'
import { Link } from 'react-router-dom'
import facebook from '../footerassets/facebook.png'
import instagram from '../footerassets/instagram.png';
import linkedin from '../footerassets/linkedin.png'

export const LoginFooter = () => {
  return (
    <footer>
    <div className='footer-section1'>
    <h1>Now Refer & Earn ₹500 for every referral*</h1>
    <p id='footer-terms'>Terms and Conditions will be appllied</p>
    </div>
    <div className='footer-about'>
      <section id='section1'>ABOUT US 
        <ul>
          <li>Doorstep Wash & Dryclean Service</li>
        </ul>
      </section>
      <section id='section2'>Home
      <ul>
        <li><Link to="/login" style={{textDecoration: 'none'}} >Sign In</Link></li>
        <li><Link style={{textDecoration: 'none'}} to="/register">Register</Link></li>
      </ul>
      </section>
      <section id='section3'>Pricing</section>
      <section id='section4'>Career
      <ul>
        <li>Blogs</li>
        <li>Create</li>
      </ul>
      </section>
      <section id='section5'>Contact</section>
      <section id='section6'>Social Media
      <ul>
        <li>
          <img src={facebook} className='footer-social' alt="facebook"/>
          <img src={instagram} className='footer-social' alt="instagram"/>
          <img src={linkedin} className='footer-social' alt="linkedin"/>
        </li>
      </ul>
      </section>
  </div>
  <div id="CopyR"> 2021 © LAUNDRY</div>
    
  </footer>
  )
}

export default LoginFooter

