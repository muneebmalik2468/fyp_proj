import React, { createContext, useState, useEffect } from "react";
import all_product from "../Components/Assets/all_product";

export const Homecontext = createContext(null);


const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length; index++) {
    cart[index] = 0; 
  }
  return cart;
}

const HomecontextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  

  
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

 
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find((product) => product.id === Number(item));
        if (itemInfo) {
          totalAmount += itemInfo.new_price * cartItems[item];
        }
      }
    }
    return totalAmount; 
  };

  const getTotalCartitems=()=>{
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
          totalItem +=cartItems[item];
              }
    }
    return  totalItem; 
  };


  
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: Math.max(prev[itemId] - 1, 0) }));
  };

 
  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]); 

  const contextValue = {  getTotalCartitems,getTotalCartAmount, all_product, cartItems, addToCart, removeFromCart };

  return (
    <Homecontext.Provider value={contextValue}>
      {props.children}
    </Homecontext.Provider>
  );
};

export default HomecontextProvider;