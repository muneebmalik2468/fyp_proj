import React, { useContext } from 'react'
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { Homecontext } from '../../Context/Homecontext';


export const ProductDisplay = ({ product }) => {
   const { addToCart } = useContext(Homecontext);

   return (
      <div className='productdisplay' >
         <div className='productdisplay-left' >
            <div className='productdisplay-img'>
               <img className='productdisplay-main-img' src={product?.image} alt="" />
            </div>
         </div>

         <div className='productdisplay-right' >
            <h1>{product?.name}</h1>


            <div className='productdisplay-right-star' >

               <img src={star_icon} alt="" />
               <img src={star_icon} alt="" />
               <img src={star_icon} alt="" />
               <img src={star_icon} alt="" />
               <img src={star_dull_icon} alt="" />
               <p>(122)</p>
            </div>
            <div className='productdisplay-right-prices'>

               <div className='productdisplay-right-prices-old'>${product?.old_price}  </div>
               <div className='productdisplay-right-prices-new'>${product?.new_price}  </div>
            </div>
            <div className='productdisplay-right-description'>
               Explore our exclusive collection designed to enhance your style.

            </div>



            <button onClick={() => { addToCart(product.id); alert("Product added to cart!"); }}>ADD TO CART</button>
            <p className='productdisplay-right-category'  > <span>Category:</span>Women, Beauty</p>
            <p className='productdisplay-right-category'  > <span>Tags:</span>Modern, Latest</p>

         </div>
      </div>



   )
}
