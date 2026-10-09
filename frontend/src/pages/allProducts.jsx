import React, { useEffect, useState } from 'react'
import { Link, Route, Routes, useParams } from 'react-router-dom'
import style from "../style.module.css"
import ProductCard from '../components/card'

const AllProducts = ({apiResponse}) => {
  const param = useParams()
  const paramId = +param.id
  console.log(paramId);
  
  return (
<div className={style.cardParent}>
  {
apiResponse.length > 0 ? apiResponse.map((product)=>{
//   return paramId === product.id ?  (
//    <ProductCard  key={product.id}   product={product}/>
// ) : null 

return (
  <ProductCard  key={product.id}   product={product}/>
)
  }) : null
}
</div>
)
}

export default AllProducts