import React from "react"
import './Sidebar.css'
import { Link } from "react-router-dom"
import addprodicon from '../../assets/add-product-icon.png'
import listprodicon from '../../assets/list-product-icon.png'
import orderlist from '../../assets/order-list-icon.png'

const Sidebar = () => {
  return(
    <div className="sidebar">
      <Link to={'/addproduct'} style={{textDecoration:"none"}}>
      <div className="sidebar-item">
        <img src={addprodicon} alt="" />
        <p>Add Product</p>
      </div>
      </Link>
      <Link to={'/listproduct'} style={{textDecoration:"none"}}>
      <div className="sidebar-item">
        <img src={listprodicon} alt="" />
        <p>Product List</p>
      </div>
      </Link>
      <Link to={'/orderlist'} style={{textDecoration:"none"}}>
      <div className="sidebar-item">
        <img src={orderlist} alt="" />
        <p>Order List</p>
      </div>
      </Link>
    </div>
  )
}

export default Sidebar