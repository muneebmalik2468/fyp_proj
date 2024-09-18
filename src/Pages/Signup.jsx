import React from 'react'
import { Link } from 'react-router-dom'
import './Signup.css';
export const Signup = () => {
  return (
   

    <div className='signup'>
    <div className='signup-container'>
      <h1>Signup</h1>
      <div className='signup-fields'>
        <input  type='text' placeholder='Your Name'  />
        <input  type='email' placeholder='Email-Address'  />
        <input  type='password' placeholder='Password'  />
         </div>   
         <button>Continue</button>      
         <p className='signup-signup'>Already have an account? <Link  style={{textDecoration: 'none', color: 'Red'}}  to="/Login"    >Login Here</Link>  </p>
         <div  className='signup-agree'>
          <input  type='checkbox'   name=''  id=''  />
          <p>By Continuing, I agree to the term of use privacy & policy.</p>

         </div>
    </div>
</div>


  )
}
