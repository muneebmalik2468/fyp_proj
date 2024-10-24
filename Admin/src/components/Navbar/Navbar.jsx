import React from "react";
import './Navbar.css'
import navlogo from '../../assets/logo.png'
import navprof from '../../assets/navprofile1.png'

const Navbar = () => {
  return(
    <div className="navbar">
      <img src={navlogo} alt="" className="nav-logo" />
      <img src={navprof} alt="" className="nav-profile" />
    </div>
  )
}

export default Navbar