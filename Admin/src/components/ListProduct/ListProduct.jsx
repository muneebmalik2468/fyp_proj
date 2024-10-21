import React, { useState } from "react";
import './ListProduct.css'
import cross_icon from '../../assets/cart_cross_icon.png'
import { useEffect } from "react";


const ListProduct = () => {

  const [allproducts, setAllProducts] = useState([]);
  const fetchInfo = async () => {
    await fetch('http://localhost:4000/allproducts').then((res) => res.json()).then((data) => { setAllProducts(data) });
  }
  useEffect(() => {
    fetchInfo();
  }, [])

  const removeprod = async (id)=>{
    await fetch('http://localhost:4000/removeprod',{
      method:'POST',
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify({id:id})
    })
    await fetchInfo();
  }

  return (
    <div className="list-product">
      <h1>Product List</h1>
      <div className="listprod-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="listprod-allprod">
        <hr />
        {allproducts.map((product, index) => {
          return <> <div key={index} className="listprod-format-main listprod-format">
            <img src={product.image} alt="" className="listprod-prodicon" />
            <p>{product.name}</p>
            <p>${product.old_price}</p>
            <p>${product.new_price}</p>
            <p>{product.category}</p>
            <img onClick={()=>{removeprod(product.id)}} src={cross_icon} alt="" className="listprod-removeicon" />
          </div>
          <hr />
          </>
        })}

      </div>
    </div>
  )
}

export default ListProduct