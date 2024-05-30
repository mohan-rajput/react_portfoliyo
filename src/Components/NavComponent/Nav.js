import React from 'react'
import './Nav.css';
import { Link } from 'react-router-dom';
function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg " data-aos="fade-down"
      data-aos-duration="1000" >
        <div class="container nav-item ">
          <img src={`${process.env.PUBLIC_URL}/Assets/logo.jpg`}  class="navbar-brand mylogo" alt="" />
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-nav  ">
           <span><Link to="/" class="nav-link " >HOME</Link></span> 
           <span><Link to="/skills" class="nav-link">SKILLS</Link></span>
           <span><Link to="/experience" class="nav-link">EXPERIENCE</Link></span>  
           <span><Link to="/project" class="nav-link">PROJECTS</Link></span> 
           <span><Link to="/contact" class="nav-link">CONTACT</Link></span> 
          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav
