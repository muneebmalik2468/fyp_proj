import React from "react"
import './Admin.css'
import Sidebar from "../../components/Sidebar/Sidebar"
import { Routes,Route } from "react-router-dom"
import AddProduct from "../../components/AddProduct/AddProduct"
import ListProduct from "../../components/ListProduct/ListProduct"
import OrderList from "../../components/OrderList/OrderList"

const Admin = () => {
  return(
    <div className="admin">
      <Sidebar/>
      <Routes>
        <Route path='/addproduct' element={<AddProduct/>} />
        <Route path='/listproduct' element={<ListProduct/>} />
        <Route path='/orderlist' element={<OrderList/>} />
      </Routes>
    </div>
  )
}

export default Admin