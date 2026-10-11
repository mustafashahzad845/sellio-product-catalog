import React, { useEffect, useState } from 'react'
import { Link, Route, Routes, useParams } from 'react-router-dom'
import style from "../style.module.css"
import ProductCard from '../components/card'

const AllProducts = ({apiResponse}) => {
  const [searchVal , setSearchVal] = useState("")
  // const param = useParams()
  // const paramId = +param.id
  // console.log(paramId);
  const searchHandler = (event)=>{
event.preventDefault()

const filterData = apiResponse.filter((product)=>{
 
 if(product.title.trim().toLowerCase().includes(searchVal.toLowerCase())){
return product
 }
    
})

if(filterData.length > 0){
filterData.map(
  (product)=>{
  return (
<ProductCard  key={product.id}   product={product}/>
  ) 
    
  }
)
}

console.log(filterData , "filterData");

// apiResponse.length > 0 ? apiResponse.map((product)=>{

// const productTitle = product.title.trim().toLowerCase()

// console.log(productTitle);


// // console.log(productTitle , "Product title");
// // console.log(searchVal.trim().toLowerCase() , "Search Val");


// // console.log(searchVal , "Search val");
// // console.log(product.title.trim().includes(searchVal));


// //   return paramId === product.id ?  (
// //    <ProductCard  key={product.id}   product={product}/>
// // ) : null 



//  return (
//   <ProductCard  key={product.id}   product={product}/>
// )
//   }) : null

  }
  
  return (
<>
<form onSubmit={(e)=>searchHandler(e)} >
  <input className={style.inputContainer} type="text" value={searchVal} placeholder='Search Product Title or Description' onChange={e=>setSearchVal(e.target.value)}/>
  {
    console.log(searchVal)
    
  }
</form>
    
<div className={style.cardParent}>
  {
    
  apiResponse.length > 0 ? apiResponse.map((product)=>{

// console.log(product.title.trim());
// console.log(searchVal);




//   return paramId === product.id ?  (
//    <ProductCard  key={product.id}   product={product}/>
// ) : null 

return (
  <ProductCard  key={product.id}   product={product}/>
)
  }) : null
}
</div>
</>

)
}

export default AllProducts