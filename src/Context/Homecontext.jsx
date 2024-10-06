import React, { createContext, useState, useEffect } from "react";
// import all_product from "../Components/Assets/all_product";

export const Homecontext = createContext(null);


const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < 300+1; index++) {
    cart[index] = 0; 
  }
  return cart;
}


const HomecontextProvider = (props) => {
  const [all_product, setAll_Product] = useState([]);
  const [cartItems, setCartItems] = useState(getDefaultCart());
  
  useEffect(()=>{
    fetch('http://localhost:4000/allproducts').then((response)=>response.json()).then((data)=>setAll_Product(data))
    if(localStorage.getItem('auth-token')){
      fetch('http://localhost:4000/getcart',{
        method:'POST',
        headers:{
          Accept:'application/form-data',
          'auth-token':`${localStorage.getItem('auth-token')}`,
          'Content-Type':'application/json',
        },
        body:"",
      }).then((response)=>response.json()).then((data)=>setCartItems(data));
    }
  },[])

  
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    if(localStorage.getItem('auth-token')){
      fetch('http://localhost:4000/addtocart',{
        method:'POST',
        headers:{
          Accept:'application/form-data',
          'auth-token':`${localStorage.getItem('auth-token')}`,
          'Content-Type':'application/json',
        },
        body:JSON.stringify({"itemId":itemId}),
      }).then((response)=>response.json()).then((data)=>console.log(data));
    }
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
    if(localStorage.getItem('auth-token')){
      fetch('http://localhost:4000/removecart',{
        method:'POST',
        headers:{
          Accept:'application/form-data',
          'auth-token':`${localStorage.getItem('auth-token')}`,
          'Content-Type':'application/json',
        },
        body:JSON.stringify({"itemId":itemId}),
      }).then((response)=>response.json()).then((data)=>console.log(data));
    }
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