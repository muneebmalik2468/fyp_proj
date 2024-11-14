import React, { createContext, useState, useEffect } from "react";

// Default cart items setup
const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < 300 + 1; index++) {
    cart[index] = 0; // Default quantity for each product
  }
  return cart;
};

export const Homecontext = createContext(null);

const HomecontextProvider = (props) => {
  // Load initial data from localStorage or default values
  const [all_product, setAll_Product] = useState(
    JSON.parse(localStorage.getItem('all_product')) || []
  );
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem('cartItems')) || getDefaultCart()
  );
  const [cartData, setCartData] = useState(
    JSON.parse(localStorage.getItem('cartData')) || []
  );

  // Fetch products and set them to state if not already in localStorage
  useEffect(() => {
    if (all_product.length === 0) {
      fetch('http://localhost:8000/allproducts')
        .then((response) => response.json())
        .then((data) => {
          setAll_Product(data);  // Set products in state
          localStorage.setItem('all_product', JSON.stringify(data));  // Save to localStorage
        })
        .catch((error) => console.error("Error fetching products:", error));
    }
  }, [all_product]); // Only fetch if `all_product` is empty

  // Fetch and update cart data
  useEffect(() => {
    if (all_product.length > 0 && localStorage.getItem('auth-token')) {
      fetch('http://localhost:4000/getcart', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'auth-token': `${localStorage.getItem('auth-token')}`,
          'Content-Type': 'application/json',
        },
        body: "",
      })
        .then((response) => response.json())
        .then((cart) => {
          setCartItems(cart);
          const updatedCartData = cart.map((quantity, index) => {
            if (quantity > 0) {
              const product = all_product.find(product => product.id === index);
              if (product) {
                return { ...product, quantity };  // Combine product and quantity
              }
            }
            return null;
          }).filter(item => item !== null);

          setCartData(updatedCartData);
          // Persist cart items and cart data to localStorage
          localStorage.setItem('cartItems', JSON.stringify(cart));
          localStorage.setItem('cartData', JSON.stringify(updatedCartData));
        });
    }
  }, [all_product]);

  // Update cart data whenever cartItems changes
  useEffect(() => {
    if (all_product.length > 0 && cartItems) {
      const updatedCartData = Object.keys(cartItems).map((key) => {
        const quantity = cartItems[key];
        if (quantity > 0) {
          const product = all_product.find((product) => product.id === parseInt(key));
          if (product) {
            return { ...product, quantity };
          }
        }
        return null;
      }).filter(item => item !== null);

      setCartData(updatedCartData);
      localStorage.setItem('cartData', JSON.stringify(updatedCartData));
    }
  }, [cartItems, all_product]); // Recalculate cart data when cartItems or all_product changes

  // Update cart item state and persist to localStorage
  const addToCart = (itemId) => {
    const updatedCartItems = { ...cartItems, [itemId]: cartItems[itemId] + 1 };
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems)); // Persist cartItems

    if (localStorage.getItem('auth-token')) {
      fetch('http://localhost:4000/addtocart', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'auth-token': `${localStorage.getItem('auth-token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ itemId }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
  };

  // Remove item from cart and persist the change to localStorage
  const removeFromCart = (itemId) => {
    const updatedCartItems = { ...cartItems, [itemId]: Math.max(cartItems[itemId] - 1, 0) };
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems)); // Persist cartItems

    if (localStorage.getItem('auth-token')) {
      fetch('http://localhost:4000/removecart', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'auth-token': `${localStorage.getItem('auth-token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ itemId }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    cartData.forEach((item) => {
      totalAmount += item.new_price * item.quantity;
    });
    return totalAmount;
  };

  const getTotalCartitems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };

  // Clear cart data and reset state after order is placed
  const clearCartData = () => {
    setCartItems(getDefaultCart()); // Reset cartItems to default
    setCartData([]); // Clear cartData

    // Remove cart data from localStorage
    localStorage.removeItem('cartItems');
    localStorage.removeItem('cartData');
  };

  const contextValue = {
    getTotalCartAmount,
    getTotalCartitems,
    all_product,
    cartItems,
    cartData,
    addToCart,
    removeFromCart,
    clearCartData, // Expose clearCartData function to the context
  };

  return (
    <Homecontext.Provider value={contextValue}>
      {props.children}
    </Homecontext.Provider>
  );
};

export default HomecontextProvider;










// import React, { createContext, useState, useEffect } from "react";

// // Default cart items setup
// const getDefaultCart = () => {
//   let cart = {};
//   for (let index = 0; index < 300 + 1; index++) {
//     cart[index] = 0; // Default quantity for each product
//   }
//   return cart;
// };

// export const Homecontext = createContext(null);

// const HomecontextProvider = (props) => {
//   // Load initial data from localStorage or default values
//   const [all_product, setAll_Product] = useState(
//     JSON.parse(localStorage.getItem('all_product')) || []
//   );
//   const [cartItems, setCartItems] = useState(
//     JSON.parse(localStorage.getItem('cartItems')) || getDefaultCart()
//   );
//   const [cartData, setCartData] = useState(
//     JSON.parse(localStorage.getItem('cartData')) || []
//   );

//   // Fetch products and set them to state if not already in localStorage
//   useEffect(() => {
//     if (all_product.length === 0) {
//       fetch('http://localhost:8000/allproducts')
//         .then((response) => response.json())
//         .then((data) => {
//           setAll_Product(data);  // Set products in state
//           localStorage.setItem('all_product', JSON.stringify(data));  // Save to localStorage
//         })
//         .catch((error) => console.error("Error fetching products:", error));
//     }
//   }, [all_product]); // Only fetch if `all_product` is empty

//   // Fetch and update cart data
//   useEffect(() => {
//     if (all_product.length > 0 && localStorage.getItem('auth-token')) {
//       fetch('http://localhost:4000/getcart', {
//         method: 'POST',
//         headers: {
//           Accept: 'application/json',
//           'auth-token': `${localStorage.getItem('auth-token')}`,
//           'Content-Type': 'application/json',
//         },
//         body: "",
//       })
//         .then((response) => response.json())
//         .then((cart) => {
//           setCartItems(cart);
//           const updatedCartData = cart.map((quantity, index) => {
//             if (quantity > 0) {
//               const product = all_product.find(product => product.id === index);
//               if (product) {
//                 return { ...product, quantity };  // Combine product and quantity
//               }
//             }
//             return null;
//           }).filter(item => item !== null);

//           setCartData(updatedCartData);
//           // Persist cart items and cart data to localStorage
//           localStorage.setItem('cartItems', JSON.stringify(cart));
//           localStorage.setItem('cartData', JSON.stringify(updatedCartData));
//         });
//     }
//   }, [all_product]);

//   // Update cart data whenever cartItems changes
//   useEffect(() => {
//     if (all_product.length > 0 && cartItems) {
//       const updatedCartData = Object.keys(cartItems).map((key) => {
//         const quantity = cartItems[key];
//         if (quantity > 0) {
//           const product = all_product.find((product) => product.id === parseInt(key));
//           if (product) {
//             return { ...product, quantity };
//           }
//         }
//         return null;
//       }).filter(item => item !== null);

//       setCartData(updatedCartData);
//       localStorage.setItem('cartData', JSON.stringify(updatedCartData));
//     }
//   }, [cartItems, all_product]); // Recalculate cart data when cartItems or all_product changes

//   // Update cart item state and persist to localStorage
//   const addToCart = (itemId) => {
//     const updatedCartItems = { ...cartItems, [itemId]: cartItems[itemId] + 1 };
//     setCartItems(updatedCartItems);
//     localStorage.setItem('cartItems', JSON.stringify(updatedCartItems)); // Persist cartItems

//     if (localStorage.getItem('auth-token')) {
//       fetch('http://localhost:4000/addtocart', {
//         method: 'POST',
//         headers: {
//           Accept: 'application/json',
//           'auth-token': `${localStorage.getItem('auth-token')}`,
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ itemId }),
//       })
//         .then((response) => response.json())
//         .then((data) => console.log(data));
//     }
//   };

//   // Remove item from cart and persist the change to localStorage
//   const removeFromCart = (itemId) => {
//     const updatedCartItems = { ...cartItems, [itemId]: Math.max(cartItems[itemId] - 1, 0) };
//     setCartItems(updatedCartItems);
//     localStorage.setItem('cartItems', JSON.stringify(updatedCartItems)); // Persist cartItems

//     if (localStorage.getItem('auth-token')) {
//       fetch('http://localhost:4000/removecart', {
//         method: 'POST',
//         headers: {
//           Accept: 'application/json',
//           'auth-token': `${localStorage.getItem('auth-token')}`,
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ itemId }),
//       })
//         .then((response) => response.json())
//         .then((data) => console.log(data));
//     }
//   };

//   const getTotalCartAmount = () => {
//     let totalAmount = 0;
//     cartData.forEach((item) => {
//       totalAmount += item.new_price * item.quantity;
//     });
//     return totalAmount;
//   };

//   const getTotalCartitems = () => {
//     let totalItem = 0;
//     for (const item in cartItems) {
//       if (cartItems[item] > 0) {
//         totalItem += cartItems[item];
//       }
//     }
//     return totalItem;
//   };

//   const contextValue = {
//     getTotalCartAmount,
//     getTotalCartitems,
//     all_product,
//     cartItems,
//     cartData,
//     addToCart,
//     removeFromCart
//   };

//   // Refresh function to manually trigger cart data update
//   const refreshCartData = () => {
//     setCartData([]);  // Clear existing cart data
//     setCartItems(getDefaultCart());  // Reset cartItems to default
//     localStorage.removeItem('cartData');  // Clear cart data from localStorage
//     localStorage.removeItem('cartItems');  // Clear cartItems from localStorage
//   };

//   return (
//     <Homecontext.Provider value={contextValue}>
//       {props.children}
//       {/* Add Refresh Button to manually update the cart data */}
//       <button onClick={refreshCartData}>Refresh Cart</button>
//     </Homecontext.Provider>
//   );
// };

// export default HomecontextProvider;
