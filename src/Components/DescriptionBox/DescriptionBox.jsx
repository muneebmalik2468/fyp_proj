import React from 'react'
import './DescriptionBox.css';

export const DescriptionBox = () => {
  return (
    <div  className='descriptionbox'>
        <div className="descriptionbox-nevigator">
            <div className="description-nav-box">Description </div>
            <div className="description-nav-box fade">Reviews(122) </div>
        </div>
        <div className="descriptionbox-description">
            <p>
            Discover the perfect addition to your [beauty routine/wardrobe/accessory collection] from our website. Crafted with high-quality materials, this website offers both style and durability.<br/> Whether you're looking for [key benefit], this item is designed to meet your needs.<br/>
            <h3>Features:</h3>
            <p><b>High-Quality Materials:</b> Crafted from premium, durable materials ensuring long-lasting use.<br/>
                <b>Variety of Options:</b> Available in multiple styles, sizes, and colors to suit different preferences and needs.<br/>
                 <b>Lightweight and Comfortable:</b> Designed for ease of use and comfort, making it perfect for everyday wear or special occasions.</p>
            </p>
        </div>


    </div>
  )
}
