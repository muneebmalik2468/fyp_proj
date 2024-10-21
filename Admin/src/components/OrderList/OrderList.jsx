import React, { useState } from "react";
import './OrderList.css'
import { useEffect } from "react";



const OrderList = () => {
    const [allorders, setAllOrders] = useState([]);
    // if(localStorage.getItem('auth-token')){
    const fetchInfo = async () => {
        await fetch('http://localhost:4000/allorders').then((res) => res.json()).then((data) => { setAllOrders(data) });
    }
    useEffect(() => {
        fetchInfo();
    }, [])
    // }


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
            </div>
            <div className="listprod-allprod">
                <hr />
                {allorders.map((product, index) => {
                    return <> <div key={index} className="listprod-format-main listprod-format">
                        <p>{product.id}</p>
                        <p>{product.name}</p>
                        <p>{product.email}</p>
                        <p>{product.address}</p>
                        <p>{product.contact}</p>
                        <p>{product.total}</p>
                        <p><select name="" id="">
                            <option value="">{product.status}</option>
                            <option value="">processing</option>
                            <option value="">delivered</option>
                            </select>
                        </p>
                    </div>
                        <hr />
                    </>
                })}

            </div>
        </div>
    )
}

export default OrderList