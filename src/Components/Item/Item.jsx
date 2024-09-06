import React from 'react'
import { Link } from 'react-router-dom'; 



const Item = ({ image, name, new_price, old_price, id }) => {
    return (
      <div className='Item'>
        <div class="Item-image-wrapper">
        <Link to={`/product/${id}`}> <img src={image} alt={name} /></Link>
        </div>
        <p>{name}</p>
        <div className='Item-prices'>
          <div className='Item-prices-old'>
            {old_price}
          </div>
          <div className='Item-prices-new'>
            {new_price}
          </div>
        </div>
      </div>
    );
  };



export default Item;