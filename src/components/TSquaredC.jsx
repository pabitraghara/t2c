import React from 'react'
import './TSquaredC.css'
import TSquared from '../assets/tsc.png'
const TSquaredC = () => {
    return (
        <section className='TSquaredC-section'>
            <div className='TSquaredC'>
                <div className='TSquaredC-left'>
                    <h1>
                        About TSquaredC
                    </h1>
                    <p>
                        At T2C, we push the boundaries of technology for businesses worldwide by creating solutions that are both innovative and robust. Our focus is on seamless integration and strategic innovation, ensuring efficient operations and scalable growth.
                    </p>
                    <p>
                        We are committed to empowering businesses in a digital-first world, simplifying complex systems to address challenges and unlock opportunities. Our scalable solutions are designed for high performance, prioritizing customer success and sustainable growth.
                    </p>
                </div>
                <img className='TSquared-right' src={TSquared} alt="" />
            </div>
        </section>
    )
}

export default TSquaredC