

import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt='logo' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore est totam, quam minus fugit aperiam veritatis illum cumque tenetur, laborum natus. Sequi aperiam eum recusandae unde eos facere, eveniet praesentium voluptates odit. Quo, cupiditate nobis! Alias provident itaque perferendis fugit, molestiae officia ipsum. A quo fugit labore dicta recusandae enim!</p>
            
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="facebook_icon" />
                    <img src={assets.twitter_icon} alt="twitter_icon" />
                    <img src={assets.linkedin_icon} alt="linkedin_icon" />
                </div>
            </div>
            <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91-0000-000-000</li>
                    <li>contact@example.com</li>
                </ul>
            </div>
        </div>
        <hr/>
        <p className='footer-copyright'>
         © 2025  YumStore. All rights reserved. | Your favorite dishes, delivered fresh! 
        </p>

    </div>
  )
}

export default Footer