import React from 'react'
import Navbar from './Navbar'
import './Hero.css'
import i from '../assets/i.png'
import one from '../assets/1.svg'
import two from '../assets/2.png'
import three from '../assets/3.png'
import four from '../assets/4.png'

import Action from './Action'
import Turbocharged from './Turbocharged'
export const Hero = () => {
    return (
        <section className='bg'>
            <Navbar />
            <div className='hero'>
                <div className='hero-left'>
                    <h1 className='hero-heading'>
                        The Future of Tech Starts Here
                    </h1>
                    <p className='hero-para'>
                        From concept to market, T²C supercharges your tech journey with top-tier talent, cutting-edge tools, and rapid execution. Let's build groundbreaking solutions that define tomorrow.
                    </p>
                    <button className='btn-btn'>
                        Let’s Build Everything Extraordinary
                    </button>
                    <div className='hero-icon'>
                        <img src={one} alt="" />
                        <img src={two} alt="" />
                        <img src={three} alt="" />
                        <img src={four} alt="" />
                    </div>
                </div>
            </div>
            <div>
                <div className='hero-img'>
                    <p>
                        Trusted by the best
                    </p>
                    <div>
                        <img src={i} alt="" />
                        <img src={i} alt="" />
                        <img src={i} alt="" />
                        <img src={i} alt="" />
                    </div>
                </div>
            </div>
            <Action />
        </section>
    )
}

