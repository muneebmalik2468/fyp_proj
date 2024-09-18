import React from 'react'
import { HomeBanner } from '../Components/HomeBanner/HomeBanner'
import HomeClothingModel from '../Components/Assets/HomeClothingModel.jpeg'
import Makeupbanner from '../Components/Assets/Makeupbanner.webp'
import HomeAccessoriesBanner from '../Components/Assets/HomeAccessories Banner.jpg'

export const Home = () => {
  return (
    <div>
      <HomeBanner img={HomeClothingModel} title="Clothing" btnTitle="Discover" btnUrl="/Clothing" />
      <HomeBanner img={Makeupbanner} title="Make Up" btnTitle="Discover" btnUrl="/Beauty" />
      <HomeBanner img={HomeAccessoriesBanner} title="Accessories" btnTitle="Discover" btnUrl="/Accessories" />
      </div>
  )
}