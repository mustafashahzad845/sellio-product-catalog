import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetailsCard from "../components/productDetailsCard";

const productDetails = () => {
  const { id } = useParams();
  const [product , setProduct] = useState({})
  // console.log(id);

  useEffect( () => {
    getProduct();
  }, [id]);

  const getProduct = async () => {
    try {
         const response = await axios.get(`https://dummyjson.com/products/${id}`);
         setProduct(response.data)
         
    } catch (error) {
       console.log(error);
        
    }
   
  };

console.log(product , "product");
// console.log(product.images);


//   <h1>productDetails</h1>
return (
<ProductDetailsCard product={product}/>
);
  
};

export default productDetails;
