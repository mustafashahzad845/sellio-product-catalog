import React, { useEffect, useState } from 'react'
import { Link, Route, Routes, useParams } from 'react-router-dom'
import style from "../style.module.css"
import ProductCard from '../components/card'

const AllProducts = ({apiResponse}) => {
  const [searchVal , setSearchVal] = useState("")
  const [searchSubmit , setSearchSumbit] = useState("")
  // let filterData;
  // const param = useParams()
  // const paramId = +param.id
  // console.log(paramId);
  const searchHandler = (event)=>{
event.preventDefault()
searchVal.length < 3 ?  alert("") :  null
setSearchSumbit(searchVal.toLowerCase())






// console.log(filterData , "filterData");

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


  const filterData = apiResponse.filter((product)=>{
 const productTitle = product.title.trim().toLowerCase()
 if(productTitle.includes(searchSubmit)){
return product
 }
    
})
  
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
    !searchSubmit.trim()  && apiResponse.length > 0 ? apiResponse.map((product)=>{

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
  } ) : searchSubmit.length > 3 ?  (
    <h1>Product Not Found</h1>
  ) : null




}
</div>
</>

)
}

export default AllProducts