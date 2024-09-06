import React from 'react'
import './HomeBanner.css'
import HomeClothingModel from '../Assets/HomeClothingModel.jpeg'
import Makeupbanner from '../Assets/Makeupbanner.webp'
import HomeAccessoriesBanner from '../Assets/HomeAccessories Banner.jpg'


export const HomeBanner = () => {
  return (
    <div className='HomeBanner'>

        <div  className='HomeClothingBanner'>
            <div className='HomeClothingBannerimg'>
            <img src={HomeClothingModel} alt=''/>
            </div>
        <div className='HomeClothingBanner-left' >
        <h2>Clothing</h2>
      <button>Discover</button>
        </div>
        </div>


        <div  className='HomeBeautyBanner'>
            <div className='HomeBeautyBannerimg'>
            <img src={Makeupbanner} alt=''/>
            </div>
        <div className='HomeBeautyBanner-left' >
        <h2>Make Up</h2>
      <button>Discover</button>
        </div>
        </div>



        <div  className='HomeAccessoriesBanner'>
            <div className='HomeAccessoriesBannerimg'>
            <img src={HomeAccessoriesBanner} alt=''/>
            </div>
        <div className='HomeAccessoriesBanner-left' >
        <h2>Accessories</h2>
      <button>Discover</button>
        </div>
        </div>


      <div className=''>
       


      </div>




    </div>
   


  )
}
