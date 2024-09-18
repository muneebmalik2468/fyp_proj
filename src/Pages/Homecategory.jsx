import React, { useContext } from 'react'
import './Homecategory.css';
import '../Components/Item/Item.css';
 import { Homecontext } from '../Context/Homecontext';
 import Item from '../Components/Item/Item'


 export const Homecategory = ({ banner, category }) => {
  const { all_product } = useContext(Homecontext);

  return (
    <div className='Home-category'>
      <div  className='Home-category-banner-image'>
         <img src={banner} alt="" />
      </div>
     
      <div className='Homecategory-indexSort'>
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
       
      </div>
      <div className='Homecategory-products'>
        {all_product.map((item, i) => {
           if (category === item.category) {
            return (
              <Item
                key={i}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
                id={item.id}
              />
            );
           }
          return null; 
        })}

      </div>

    


   </div>
    

  )
}
