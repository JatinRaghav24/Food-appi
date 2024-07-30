import React from 'react'
import './Footer.css' 
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='Footer' id='footer' >
        <div className="footer-content">
            <div className="footer-left">
            <h2 className="logo">FOOD<span>18.</span></h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ad non aperiam, porro explicabo maxime, vero aliquid, asperiores omnis magnam quas provident repudiandae voluptatem exercitationem. Doloribus sint aliquid impedit alias.</p>
            <div className="icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
            </div>
            </div>
            <div className="footer-center">
            <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-212-456-7689</li>
                    <li>contact@tomate.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="copy-right">Copyright 2024 @ <span>Food18.com </span> - All Right Reserved</p>
    </div>
  )
}

export default Footer