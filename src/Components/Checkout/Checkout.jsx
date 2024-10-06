
import React, { useContext, useState } from 'react'
import './Checkout.css';
import { Homecontext } from '../../Context/Homecontext';

export const Checkout = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    contact: "",
    total: ""
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const { getTotalCartAmount } = useContext(Homecontext);

  const placeord = async () => {
    const updatedFormData = { ...formData, total: getTotalCartAmount() }; // Set total here
    console.log(updatedFormData);
    await fetch('http://localhost:4000/orderprod', {
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedFormData), // Use updatedFormData
    }).then((response) => response.json())
  }

  return (
    <div className='checkout-order'>
      <div className='proceed-to-checkout'>
        <h2>Proceed To Checkout</h2>
      </div>
      <div className='Checkout-field'>
        <input name='email' value={formData.email} onChange={changeHandler} type='email' placeholder='Email-Address' />
        <input name='name' value={formData.name} onChange={changeHandler} type='text' placeholder='Your Name' />
        <input name='address' value={formData.address} onChange={changeHandler} type='text' placeholder='Address' />
        <input name='contact' value={formData.contact} onChange={changeHandler} type='text' placeholder='Phone Number' />
        <input name='total' readOnly type="text" value={getTotalCartAmount()} />
      </div>
      <div className='order-summary'>
        <h3>Order Summary</h3>
        <div className='order-summary-total'>
          <p>Total</p>
          <h3>${getTotalCartAmount()}</h3>
        </div>
      </div>
      <div className='checkout-order-button'>
        <button onClick={() => { placeord(); alert("Order Placed"); }}>Place Order</button>
      </div>
    </div>
  )
}


