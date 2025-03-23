import React from 'react'
import './Footer.css'
import logo from '../assets/logo.png'
const Footer = () => {
    return (
        <footer className='footer-container'>
            <div className='footer'>
                <div className='footer-left-right'>
                    <div className='footer-left' >
                        <img className='logo' src={logo} alt="" />
                        <p className='footer-para'>
                            Want to build the future with us?
                            follow T²C and make an impact!

                        </p>
                        <div className='icon'>
                            <i class="fa-brands fa-instagram "></i>
                            <i class="fa-brands fa-discord"></i>
                            <i class="fa-brands fa-twitter"></i>
                        </div>
                    </div>
                    <div className='footer-right' >
                        <div className='footer-right-content'>
                            <h4>
                                Product
                            </h4>
                            <ul className='footer-link'>
                                <li>Home</li>
                                <li>Aboute</li>
                                <li>Services</li>
                                <li>Faq</li>
                                <li>Why Choose</li>
                                <li>Conatct</li>
                            </ul>
                        </div>
                        <div className='footer-right-content' >
                            <h4>
                                Company
                            </h4>
                            <ul className='footer-link'>
                                <li>Vision</li>
                                <li>Mission</li>
                                <li>Values</li>
                                <li>Team</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='div'></div>
                <div className='footer-cpoyright'>
                    <p>
                        © 2024 TSquaredC  |  All Rights Reserved.
                    </p>
                    <p className='footer-cpoyright-flex'>
                        <span>Privacy Policy</span>
                        <span>Terms of Service</span>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer