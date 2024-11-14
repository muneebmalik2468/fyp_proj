
import React, { useContext } from 'react';
import './CartItems.css';
import { Homecontext } from '../../Context/Homecontext';
import remove_icon from '../Assets/cart_cross_icon.png';
import { Link } from 'react-router-dom';

export const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(Homecontext);

  return (
    <div className='cartitems'>
      <div className="cartitems-format-main">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((product) => {
        if (cartItems[product.id] > 0) {
          return (
            <div key={product.id}>
              <div className="cartitems-format cartitems-format-main">
                <img src={product.image} alt={product.name} className='carticon-product-icon' />
                <p>{product.name}</p>
                <p>${product.new_price}</p>
                <button className='cartitems-quantity'>{cartItems[product.id]}</button>
                <p>${(product.new_price * cartItems[product.id]).toFixed(2)}</p>
                <img className='cartitems-remove-icon'
                  src={remove_icon}
                  onClick={() => removeFromCart(product.id)}
                  alt="Remove"
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}

      <div className='cartitems-down'>
        <div className='cartitems-total'>
          <h1>cart Total</h1>
          <div>
            <div className='cartitems-total-item'>
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className='cartitems-total-item'>
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className='cartitems-total-item'>
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <Link to="/Proceed-To-Checkout" ><button >PROCEED TO CHECKOUT</button></Link>

        </div>

      </div>


    </div>
  );
}

export default CartItems;