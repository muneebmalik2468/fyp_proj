import React from "react";
import './Navbar.css'
import navlogo from '../../assets/logo.png'
import navprof from '../../assets/navprofile1.png'

const Navbar = ({ onLogout }) => {
  return(
    <div className="navbar">
      <img src={navlogo} alt="Logo" className="nav-logo" />
      <img 
        src={navprof} 
        alt="Profile" 
        className="nav-profile" 
        onClick={onLogout}
      />
    </div>
  )
}

export default Navbar;

