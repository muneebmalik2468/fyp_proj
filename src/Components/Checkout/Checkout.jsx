import React, { useContext } from 'react'
import './Checkout.css';
import { Homecontext } from '../../Context/Homecontext';


export const Checkout = () => {
    const { getTotalCartAmount}= useContext(Homecontext);
  return (
    <div className='checkout-order'>
        <div className='proceed-to-checkout'>
            <h2>Proceed To Checkout</h2>
            
        </div>
        <div className='Checkout-field'>
        <input  type='email' placeholder='Email-Address'  />
            <input  type='text' placeholder='Your Name'  />
            <input  type='text' placeholder='Address'  />
            <input  type='text' placeholder='Phone Number'  />
             </div>
             <div  className='order-summary'>
               <h3>Order Summary</h3>
               <div    className='order-summary-total'>
                <p>Total</p>
                <h3>${getTotalCartAmount()}</h3>
                  </div>
               <p></p>
             </div>
                <div className='checkout-order-button'>
             <button>Placed Order</button>      
       
             </div>

    </div>
  )
}
