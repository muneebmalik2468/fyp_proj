import React, { useContext, useState } from 'react'

import './Navbar.css'

import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { Homecontext } from '../../Context/Homecontext'

export const Navbar = () => {
  const [menu, setmenu] = useState("Home")

  const { getTotalCartitems } = useContext(Homecontext);


  return (
    <>
      <div className='navbar'>
        <div className="nav_logo" >
          <p>GlamorHub</p>
        </div>
        <ul className="nav-menu">
          <li onClick={() => { setmenu("Home") }}><Link style={{ textDecoration: 'none' }} to='/'>  Home </Link>{menu === "Home" ? <hr /> : <></>} </li>
          <li onClick={() => { setmenu("Clothing") }}><Link style={{ textDecoration: 'none' }} to='/Clothing'> Clothing</Link> {menu === "Clothing" ? <hr /> : <></>}</li>
          <li onClick={() => { setmenu("Beauty") }}> <Link style={{ textDecoration: 'none' }} to='/Beauty'>Beauty</Link> {menu === "Beauty" ? <hr /> : <></>}</li>
          <li onClick={() => { setmenu("Accessories") }}> <Link style={{ textDecoration: 'none' }} to='/Accessories'> Accessories</Link> {menu === "Accessories" ? <hr /> : <></>}</li>
          <li onClick={() => { setmenu("AboutUs") }}>  <Link style={{ textDecoration: 'none' }} to='/AboutUs'> About Us</Link>{menu === "AboutUs" ? <hr /> : <></>}</li>
        </ul>
        <div className='nav-login-cart'>
          {localStorage.getItem('auth-token')
            ? <button onClick={() => { localStorage.removeItem('auth-token'); window.location.replace('/'); alert("Logged Out Successfully!"); }}>Logout</button> : <Link to='/Login'>  <button>Account</button></Link>}

          <Link to='/cart'> <img src={cart_icon} alt='' />   </Link>

          <div className='nav-cart-count'>{getTotalCartitems()}</div>
        </div>

      </div>
    </>
  )
}