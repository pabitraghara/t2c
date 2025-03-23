import React from 'react'
import './Turbocharged.css'
import Background from '../assets/Background.png'
import Closed from '../assets/Closed.png'
import Closed1 from '../assets/Closed1.png'
import Closed2 from '../assets/Closed2.png'
const Turbocharged = () => {
    return (
        <section className='section-Turbocharged'>
            <div className='t-heading'>
                <h1>Technology, Turbocharged</h1>
                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nulla velit, maximus sit 
                    <br />
                    amet suscipit in, fermentum id est. Suspendisse consequat ornare elit.”
                </p>
            </div>
            <div className='turbocharged'>
                <div className='turbocharged-box'>
                    <img src={Background} alt="" />
                    <div className='turbocharged-context'>
                        <h5>TurboSend</h5>
                        <p className='turbocharged-context-para'>
                            Instantly deploy powerful chat functionalities built for scalability and real-time performance. No delays, just results.
                        </p>
                        <div className='check-now'>
                            <p>
                                Check Now
                            </p>
                            <i class="fa-solid fa-arrow-right"></i>
                        </div>
                    </div>
                </div>
                <div className='turbocharged-box'>
                    <img src={Background} alt="" />
                    <div className='turbocharged-context'>
                        <h5>TurboSend</h5>
                        <p className='turbocharged-context-para'>
                            Instantly deploy powerful chat functionalities built for scalability and real-time performance. No delays, just results.
                        </p>
                        <div className='check-now'>
                            <p>
                                Check Now
                            </p>
                            <i class="fa-solid fa-arrow-right"></i>
                        </div>
                    </div>
                </div>
                <div className='turbocharged-box'>
                    <img src={Background} alt="" />
                    <div className='turbocharged-context'>
                        <h5>TurboSend</h5>
                        <p className='turbocharged-context-para'>
                            Instantly deploy powerful chat functionalities built for scalability and real-time performance. No delays, just results.
                        </p>
                        <div className='check-now'>
                            <p>
                                Check Now
                            </p>
                            <i class="fa-solid fa-arrow-right"></i>
                        </div>
                    </div>
                </div>
                <div className='turbocharged-box'>
                    <img src={Background} alt="" />
                    <div className='turbocharged-context'>
                        <h5>TurboSend</h5>
                        <p className='turbocharged-context-para'>
                            Instantly deploy powerful chat functionalities built for scalability and real-time performance. No delays, just results.
                        </p>
                        <div className='check-now'>
                            <p>
                                Check Now
                            </p>
                            <i class="fa-solid fa-arrow-right"></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Turbocharged