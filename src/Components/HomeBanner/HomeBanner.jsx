import React from 'react'
import './HomeBanner.css'
import { Link } from 'react-router-dom'



export const HomeBanner = ({img, title, btnTitle, btnUrl}) => {
  return (
    <div className='HomeBanner'>
        <div  className='HomeAccessoriesBanner'>
            <div className='HomeAccessoriesBannerimg'>
            <img src={img} alt=''/>
            </div>
        <div className='HomeAccessoriesBanner-left' >
        <h2>{title}</h2>
     <Link to={btnUrl}> <button>{btnTitle}</button></Link>
        </div>
        </div>





    </div>
   


  )
}
