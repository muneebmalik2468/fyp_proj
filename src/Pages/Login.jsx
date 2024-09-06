import React from 'react'
import './Login.css'
export const Login = () => {
  return (
   
    <div className='login'>
        <div className='login-container'>
          <h1>Sign up</h1>
          <div className='login-fields'>
            <input  type='text' placeholder='Your Name'  />
            <input  type='email' placeholder='Email-Address'  />
            <input  type='password' placeholder='Password'  />
             </div>   
             <button>Continue</button>      
             <p className='login-login'>Already have an account? <span>Login Here</span></p>
             <div  className='login-agree'>
              <input  type='checkbox'   name=''  id=''  />
              <p>By Continuing, I agree to the term of use privacy & policy.</p>

             </div>
        </div>
    </div>



  )
}


