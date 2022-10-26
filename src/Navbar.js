import React from 'react';
import "./navbar.css";

function Navbar() {
  return (
    <div className='head_nav'>
    <nav className='navbar'>
        <img className='logo circle' src='/images/mypic.JPG' alt=''/>

      <ul className='nav-links'>

            <div className='menu'>
            <li><a href="/">Home</a></li>
            
            <li><a href="/about">About</a></li>
            

         <li class="services">
           <a href="/work">Work</a>
        
         </li>
         <li><a href="/contact">Contact</a></li>
         <li><a href="/resume">Resume</a></li>
            </div>

      </ul>
    </nav>
    </div>
  )
}

export default Navbar
