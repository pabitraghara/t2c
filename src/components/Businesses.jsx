import React from 'react'
import './Businesses.css'
import Frame_1686551003 from '../assets/Frame 1686551003.png'
import Gradient from '../assets/Gradient.png'
import chat from '../assets/chat.png'
const Businesses = () => {
    return (
        <section className='Businesses-container'>
            <div className='Businesses'>
                <h1>Choose Your Solution <br /> For Emerging Businesses</h1>
                <p>Propel your new age business forward with our Solutions:</p>
            </div>

            <img className='img1' src={Gradient} alt="" />
            <img className='img2' src={Gradient} alt="" />
            <div className='Businesses-boxes'>
                <div className='Businesses-content-left'>
                    <img src={Frame_1686551003} alt="" />
                    <div className='buss-info'>
                        <div className='bus-desc'>
                            <h2>Plug and Play Solutions</h2>
                            <p>
                                <strong>
                                    Instant Integration, Immediate Impact:
                                </strong>
                                <br />
                                Dive into the market without delay, utilizing our fully  integrated tech stack that meshes seamlessly with your operations.</p>
                        </div>
                        <div className='line'></div>
                        <button>
                            Customize Your Path
                        </button>

                    </div>
                </div>
                <div className='Businesses-content-right'>
                    <img src={chat} alt="" />
                    <div className='content-right'>
                        <div className=''>
                            <h2>Customizable Solutions</h2>
                            <p>
                                Customizable Solutions designed for your business's unique demands & growth trajectory.
                                <strong>
                                    Build, Expand:
                                </strong>
                                Engineered for long-term evolution, these solutions ensure your technology infrastructure grows as dynamically as your business.</p>
                        </div>
                        <div className='line'></div>
                        <button>
                            Customize Your Path
                        </button>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Businesses