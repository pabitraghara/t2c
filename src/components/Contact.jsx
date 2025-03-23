import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section style={{ backgroundColor: 'black' }}className='contact' >
      <div className='contact-contaner'>
        <div className='contact-left'>
          <div className='context-left-content'>
            <h1>Ready to Build the Future?
              <br /> Let’s Make It Happen</h1>
            <div className='line'></div>
            <p>
              Your breakthrough idea deserves a world-class execution. Partner with T²C and transform your vision into reality.
            </p>
          </div>
          <form>
            <div className='input-info'>
              <div className='input-box'>
                <label htmlFor="firstName">First Name</label>
                <input type="text" placeholder="First Name" name="firstName" id="firstName" />
              </div>
              <div className='input-box'>
                <label htmlFor="lastName">Last Name</label>
                <input type="text" placeholder="Last Name" name="lastName" id="lastName" />
              </div>
              <div className='input-box'>
                <label htmlFor="email">Email ID</label>
                <input type="email" placeholder="Email ID" name="email" id="email" />
              </div>
              <div className='input-box'>
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" placeholder="+1-202-555-0174" name="phone" id="phone" />
              </div>
            </div>
            <button>Send Now</button>
          </form>
        </div>
        <div className="contact-right">
          <div className='contact-right-location'>
            <div className='icon-contact'>
              <i className="fa-solid fa-location-dot"></i>
            </div>
            <div className='icon-contact-info'>
              <h1>Location</h1>
              <p>
                Turbostart Technology Development Centre Pvt Ltd
                <br />
                <strong>CIN:</strong> U72900TZ2022PTC029746 <br />
                <strong>Address:</strong> 1st Floor, Mayflower Valencia, Avinashi Road, Coimbatore - 641004, TN, IN
              </p>
            </div>
          </div>
          <div className='contact-right-location'>
            <div className='icon-contact'>
            <i class="fa-solid fa-headphones"></i>
            </div>
            <div className='icon-contact-info'>
              <h1>Contact Number</h1>
              <p>
                +91 7598 443 162
              </p>
            </div>
          </div>
          <div className='contact-right-location'>
            <div className='icon-contact'>
            <i class="fa-solid fa-envelope"></i>
            </div>
            <div className='icon-contact-info'>
              <h1>Email Address</h1>
              <p>
                t2c@tsquaredc.com
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
