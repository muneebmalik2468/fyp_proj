import React from 'react'
import './Footer.css'

import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
export const Footer = () => {
  return (
  
    <div className='footer'>
      <div   className='footer-logo'>
       
        <p>GlamorHub</p>
      </div>

      <ul  className='footer-links'>
        <li>Company</li>
        <li>Products</li>
        <li>Office</li>
        <li>about</li>
        <li>Contact</li>
        </ul>
        <div  className='footer-social-icon'>
          <div className='footer-icon-container'>
          <img src={instagram_icon} alt="" />
          </div>
          <div className='footer-icon-container'>
          <img src={pintester_icon} alt="" />
          </div>
          <div className='footer-icon-container'>
          <img src={whatsapp_icon} alt="" />
          </div>
         </div>
          <div  className='footer-copyright'>
            <hr/>
           <p>Copyright @ 2024 - All Right Reserved</p>
 
          </div>
          
          
          
        </div>
      
      

  
 
  )
}
