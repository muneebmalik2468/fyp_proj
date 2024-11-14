import React, { useContext, useState } from 'react';
import './Checkout.css';
import remove_icon from '../Assets/cart_cross_icon.png';
import { Homecontext } from '../../Context/Homecontext';

export const Checkout = () => {
  const { cartData, getTotalCartAmount, removeFromCart, clearCartData } = useContext(Homecontext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    contact: "",
    total: ""
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const placeOrder = async () => {
    const { name, email, address, contact } = formData;
    if (!name || !email || !address || !contact) {
      alert("Please fill in all required fields.");
      return;
    }

    const authToken = localStorage.getItem('auth-token');
    if (!authToken) {
      alert("Authentication required. Please log in to place an order.");
      return;
    }

    const updatedFormData = { ...formData, total: getTotalCartAmount(), cartItems: cartData };
    console.log(updatedFormData);

    await fetch('http://localhost:7000/orderprod', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`,
      },
      body: JSON.stringify(updatedFormData),
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Order Placed");

        // Clear cart after placing the order
        clearCartData(); // Clear cart data and localStorage
      })
      .catch((error) => {
        console.error("Error placing order:", error);
        alert("There was an error placing your order. Please try again.");
      });
  };



  // import React, { useContext, useState } from 'react';
  // import './Checkout.css';
  // import remove_icon from '../Assets/cart_cross_icon.png';
  // import { Homecontext } from '../../Context/Homecontext';

  // export const Checkout = () => {
  //   const { cartData, getTotalCartAmount, removeFromCart } = useContext(Homecontext);

  //   const [formData, setFormData] = useState({
  //     name: "",
  //     email: "",
  //     address: "",
  //     contact: "",
  //     total: ""
  //   });

  //   const changeHandler = (e) => {
  //     setFormData({ ...formData, [e.target.name]: e.target.value });
  //   };

  //   const placeOrder = async () => {
  //     const { name, email, address, contact } = formData;
  //     if (!name || !email || !address || !contact) {
  //       alert("Please fill in all required fields.");
  //       return;
  //     }

  //     // Check for auth-token in localStorage
  //     const authToken = localStorage.getItem('auth-token');
  //     if (!authToken) {
  //       alert("Authentication required. Please log in to place an order.");
  //       return;
  //     }

  //     // Proceed to place the order if auth-token is found
  //     const updatedFormData = { ...formData, total: getTotalCartAmount(), cartItems: cartData };
  //     console.log(updatedFormData);

  //     await fetch('http://localhost:7000/orderprod', {
  //       method: 'POST',
  //       headers: {
  //         Accept: 'application/json',
  //         'Content-Type': 'application/json',
  //         'Authorization': `Bearer ${authToken}`, // Send auth-token if available
  //       },
  //       body: JSON.stringify(updatedFormData),
  //     })
  //       .then((response) => response.json())
  //       .then((data) => {
  //         alert("Order Placed");
  //       })
  //       .catch((error) => {
  //         console.error("Error placing order:", error);
  //         alert("There was an error placing your order. Please try again.");
  //       });
  //   };

  return (
    <div className='checkout-order'>
      <div className='proceed-to-checkout'>
        <h2>Proceed To Checkout</h2>
      </div>
      <div className='Checkout-field'>
        <input
          name='email'
          value={formData.email}
          onChange={changeHandler}
          type='email'
          placeholder='Email-Address'
        />
        <input
          name='name'
          value={formData.name}
          onChange={changeHandler}
          type='text'
          placeholder='Your Name'
        />
        <input
          name='address'
          value={formData.address}
          onChange={changeHandler}
          type='text'
          placeholder='Address'
        />
        <input
          name='contact'
          value={formData.contact}
          onChange={changeHandler}
          type='text'
          placeholder='Phone Number'
        />
      </div>
      <div className="cart-summary">
        <h3>Cart Summary</h3>
        {cartData.map(item => (
          <div key={item.id} className="cart-item">
            <div className="cart-item-details">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-info">
                <p className="cart-item-name">{item.name}</p>
                <p className="cart-item-quantity">{item.quantity} x ${item.new_price}</p>
              </div>
            </div>
            <img
              src={remove_icon}
              onClick={() => removeFromCart(item.id)}
              alt="Remove"
              className="cart-item-remove"
            />
          </div>
        ))}
      </div>

      <div className='order-summary'>
        <h3>Order Summary</h3>
        <div className='order-summary-total'>
          <p>Total</p>
          <h3>${getTotalCartAmount()}</h3>
        </div>
      </div>

      <div className='checkout-order-button'>
        <button onClick={placeOrder}>Place Order</button>
      </div>
    </div>
  );
};

