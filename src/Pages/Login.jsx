import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

export const Login = () => {
  return (
   
    <div className='login'>
        <div className='login-container'>
          <h1>Login</h1>
          <div className='login-fields'>
            <input  type='email' placeholder='Email-Address'  />
            <input  type='password' placeholder='Password'  />
             </div>   
             <button>Continue</button>      
             <p className='login-login'>Don't have an account? <Link  style={{textDecoration: 'none', color: 'Red'}}  to="/Signup"    >Signup Here</Link>  </p>
             <div  className='login-agree'>
              <input  type='checkbox'   name=''  id=''  />
              <p>By Continuing, I agree to the term of use privacy & policy.</p>

             </div>
        </div>
    </div>



  )
}


