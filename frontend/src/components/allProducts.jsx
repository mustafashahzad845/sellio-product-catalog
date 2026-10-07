import React, { useEffect, useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import style from "../style.module.css"
import ProductCard from './card'

const AllProducts = ({apiResponse}) => {
  return (
<div className={style.cardParent}>
  {
apiResponse.length > 0 ? apiResponse.map((product)=>{
return (
  <ProductCard  key={product.id}   product={product}/>
)
  }) : null
}
</div>
)
}

export default AllProducts