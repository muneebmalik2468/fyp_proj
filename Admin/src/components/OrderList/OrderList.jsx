import React, { useState, useEffect } from "react";
import './OrderList.css';

const OrderList = () => {
    const [allorders, setAllOrders] = useState([]);

    const fetchInfo = async () => {
        try {
            const response = await fetch('http://localhost:7000/allorders');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log('Fetched data:', data); 
            setAllOrders(data);
        } catch (error) {
            console.error('Error fetching orders:', error);
        }
    };

    useEffect(() => {
        fetchInfo();
    }, []);

    return (
        <div className="list-product">
            <h1>Orders List</h1>
            <div className="listprod-format-main">
                <p>ID</p>
                <p>Email</p>
                <p>Name</p>
                <p>Address</p>
                <p>Contact</p>
                <p>Total</p>
                <p>Status</p>
                <p>Cart Items</p> {/* Added this header for cart items */}
            </div>
            <div className="listprod-allprod">
                <hr />
                {allorders.length === 0 ? (
                    <p>No orders found.</p>
                ) : (
                    allorders.map((order) => (
                        <div key={order.id} className="listprod-format-main listprod-format">
                            <p>{order.id}</p>
                            <p>{order.email}</p>
                            <p>{order.name}</p>
                            <p>{order.address}</p>
                            <p>{order.contact}</p>
                            <p>{order.total}</p>
                            <p>
                                <select>
                                    <option value={order.status}>{order.status}</option>
                                    <option value="processing">Processing</option>
                                    <option value="delivered">Delivered</option>
                                </select>
                            </p>
                            
                            {/* Cart Items Section */}
                            <div className="cart-items-container">
                                {order.cartItems && order.cartItems.length > 0 ? (
                                    order.cartItems.map((item) => (
                                        <div key={item._id} className="cart-item">
                                            <img src={item.image} alt={item.name} />
                                            <div className="cart-item-details">
                                                <span>{item.name}</span>
                                                <span>Quantity: {item.quantity}</span>
                                                <span>Price: ${item.new_price}</span>
                                                <span className="cart-item-total">
                                                    Total: ${(item.new_price * item.quantity).toFixed(2)}
                                                </span>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <p>No cart items</p>
                                )}
                            </div>
                        
                        </div>
                    ))
                    
                )}
                <hr />
                
            </div>
            
        </div>
        
    );
};

export default OrderList;


