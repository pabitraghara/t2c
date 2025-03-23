import React from 'react'
import './WhyChoose.css'
import wc1 from '../assets/wc1.png'
import wc2 from '../assets/wc2.png'
import wc3 from '../assets/wc3.png'
import wc4 from '../assets/wc4.png'
const WhyChoose = () => {
    return (
        <section className='WhyChoose-container'>
            <div className='WhyChoose'>
                <h1>Why Choose TSquaredC </h1>
                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nulla velit, maximus sit <br /> amet suscipit in, fermentum id est. Suspendisse consequat ornare elit.”</p>
            </div>

            <div className='WhyChoose-content'>
                <div className='wc-b1'>
                    <div className='content-box'>
                        <i class="fa-solid fa-vector-square"></i>
                        <h4>Tech & Talent Unified</h4>
                    </div>
                    <p>Access every technology, every skill set, and every tool - fully integrated and ready to execute.</p>
                    <img src={wc1} alt="" />
                </div>
                <div className='wc-b1'>
                    <div className='content-box'>
                        <i class="fa-solid fa-vector-square"></i>
                        <h4>Tech & Talent Unified</h4>
                    </div>
                    <p>Access every technology, every skill set, and every tool - fully integrated and ready to execute.</p>
                    <img src={wc2} alt="" />
                </div>
                <div className='wc-b1'>
                    <div className='content-box'>
                        <i class="fa-solid fa-vector-square"></i>
                        <h4>Tech & Talent Unified</h4>
                    </div>
                    <p>Access every technology, every skill set, and every tool - fully integrated and ready to execute.</p>
                    <img src={wc3} alt="" />
                </div>
                <div className='wc-b1'>
                    <div className='content-box'>
                        <i class="fa-solid fa-vector-square"></i>
                        <h4>Tech & Talent Unified</h4>
                    </div>
                    <p>Access every technology, every skill set, and every tool - fully integrated and ready to execute.</p>
                    <img src={wc4} alt="" />
                </div>
            </div>

        </section>
    )
}

export default WhyChoose