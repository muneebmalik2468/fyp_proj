import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Signup.css';
export const Signup = () => {

  const [formData, setFormData]  = useState({
    username:"",
    email:"",
    password:""
  })
  const changeHandler = (e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  const usersignup = async ()=>{
    console.log(formData);
    let responseData;
    await fetch('http://localhost:4000/signup',{
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
   

    <div className='signup'>
    <div className='signup-container'>
      <h1>Signup</h1>
      <div className='signup-fields'>
        <input name='username' value={formData.username} onChange={changeHandler} type='text' placeholder='Your Name'  />
        <input name='email' value={formData.email} onChange={changeHandler} type='email' placeholder='Email-Address'  />
        <input name='password' value={formData.password} onChange={changeHandler} type='password' placeholder='Password'  />
         </div>   
         <button onClick={()=>{usersignup()}}>Continue</button>      
         <p className='signup-signup'>Already have an account? <Link  style={{textDecoration: 'none', color: 'Red'}}  to="/Login"    >Login Here</Link>  </p>
         <div  className='signup-agree'>
          <input  type='checkbox'   name=''  id=''  />
          <p>By Continuing, I agree to the term of use privacy & policy.</p>

         </div>
    </div>
</div>


  )
}
