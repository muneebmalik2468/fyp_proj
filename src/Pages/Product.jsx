import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { Homecontext } from '../Context/Homecontext';
import { Breadcrums } from '../Components/Breadcrums/Breadcrums';
import { ProductDisplay } from '../Components/ProductDisplay/ProductDisplay';
import { DescriptionBox } from '../Components/DescriptionBox/DescriptionBox';





export const Product = () => {
  const {all_product}=useContext(Homecontext);
  const {ProductId}=useParams();
 
  const product= all_product.find((e)=> e.id === Number( ProductId ));

  console.log(ProductId, product, "sdasda")
  return (
    <div>

      <Breadcrums  product={product} />
      <ProductDisplay  product={product}  />
       <DescriptionBox/>


    </div>
  )
}

export default Product;