import React, { useEffect, useState } from 'react'
import { Link, Route, Routes, useParams } from 'react-router-dom'
import style from "../style.module.css"
import ProductCard from '../components/card'

const AllProducts = ({apiResponse}) => {
  const [searchVal , setSearchVal] = useState("")
  // const [searchSubmit , setSearchSumbit] = useState("")
  // let filterData;
  // const param = useParams()
  // const paramId = +param.id
  // console.log(paramId);



  const filterData = apiResponse.filter((product)=>{
 const productTitle = product.title.trim().toLowerCase()
 if(productTitle.includes(searchVal.trim().toLowerCase())){
return product
 }
    
})
  
  return (
<>
<div>
  <input className={style.inputContainer} type="text" value={searchVal} placeholder='Search Product Title or Description' onChange={e=>setSearchVal(e.target.value)}/>
  {
    console.log(searchVal)
    
  }
</div>
    
<div className={style.cardParent}>
  {
   !searchVal.trim()   && apiResponse.length > 0 ? apiResponse.map((product)=>{

// console.log(product.title.trim());
// console.log(searchVal);




//   return paramId === product.id ?  (
//    <ProductCard  key={product.id}   product={product}/>
// ) : null 

return (
  <ProductCard  key={product.id}   product={product}/>
)
  }) :  filterData.length > 0 ? filterData.map( (product)=>{
return (
  <ProductCard  key={product.id}   product={product}/>
)
  } ) : searchVal.trim() && filterData.length == 0  ?  (
    <h1>Product Not Found</h1>
  ) : null




}
</div>
</>

)
}

export default AllProducts