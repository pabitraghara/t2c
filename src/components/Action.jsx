import React from 'react'
import './Action.css'
import action1 from '../assets/ACTION1.png'
import action2 from '../assets/ACTION2.png'
import Turbocharged from './Turbocharged'
const Action = () => {
    return (
        <section className='Action-contaner'>
            <div className='Action-heading'>
                <h1>Innovation in Action</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nulla velit, maximus sit amet <br /> suscipit in, fermentum id est. Suspendisse consequat ornare elit.
                </p>
            </div>
            <div className='action-content'>
                <div className='action-bg'>
                    <img src={action1} alt="" />
                    <div className='action-info'>
                        <h1>
                            Revolutionized Kenverse’s AI
                             capabilities in just 6 months
                        </h1>
                        <p>
                            From concept to deployment, T²C engineered an AI 
                             transformation that positioned Kenverse as a market leader.
                        </p>
                    </div>
                </div>
                <div className='action-bg'>
                    <img src={action2} alt="" />
                    <div className='action-info'>
                        <h1>
                            Revolutionized Kenverse’s AI
                             capabilities in just 6 months
                        </h1>
                        <p>
                            From concept to deployment, T²C engineered an AI 
                             transformation that positioned Kenverse as a market leader.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Action
