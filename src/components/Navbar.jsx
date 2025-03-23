import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../assets/logo.png'
const Navbar = () => {
    const [menu, setMenu] = useState(false)
    function openMenu() {
        setMenu(!menu);
    }
    useEffect(() => {
        if (menu) {
            document.body.style.overflow = "hidden"; 
        } else {
            document.body.style.overflow = "auto"; 
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [menu]);
    return (
        <nav>
            <div className='nav-bar'>
                <img className='logo' src={logo} alt="" />
                <ul className={`menu-link ${menu ? 'active' : ''}`}>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Blog</li>
                    <li>News</li>
                    <li>Contact</li>
                </ul>
                <button className='btn'>
                    Get Started
                </button>
                <div className='menu'>
                    <i onClick={openMenu} class="fa-solid fa-bars"></i>
                </div>
            </div>
        </nav>
    )
}


export default Navbar