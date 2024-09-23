import React, { useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'


export const Login = () => {

  const [formData, setFormData]  = useState({
    email:"",
    password:""
  })
  const changeHandler = (e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  const userlogin = async ()=>{
    console.log(formData);
    let responseData;
    await fetch('http://localhost:4000/login',{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(formData),
    }).then((response)=>response.json()).then((data)=>responseData=data)
    if(responseData.success){
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace("/");
    }else{
      alert(responseData.error)
    }
  }
  
  return (
   
    <div className='login'>
        <div className='login-container'>
          <h1>Login</h1>
          <div className='login-fields'>
            <input name='email' value={formData.email} onChange={changeHandler} type='email' placeholder='Email-Address'  />
            <input name='password' value={formData.password} onChange={changeHandler} type='password' placeholder='Password'  />
             </div>   
             <button onClick={()=>{userlogin()}}>Continue</button>      
             <p className='login-login'>Don't have an account? <Link  style={{textDecoration: 'none', color: 'Red'}}  to="/Signup"    >Signup Here</Link>  </p>
             <div  className='login-agree'>
              <input  type='checkbox'   name=''  id=''  />
              <p>By Continuing, I agree to the term of use privacy & policy.</p>

             </div>
        </div>
    </div>



  )
}


