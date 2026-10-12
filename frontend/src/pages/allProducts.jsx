import React, { useEffect, useState } from 'react'
import { Link, Route, Routes, useParams } from 'react-router-dom'
import style from "./AllProducts.module.css"
import ProductCard from '../components/card'

const AllProducts = ({apiResponse}) => {
  const [searchVal , setSearchVal] = useState("")


  const filterData = apiResponse.filter((product)=>{
 const productTitle = product.title.trim().toLowerCase()
 if(productTitle.includes(searchVal.trim().toLowerCase())){
return product
 }
   
})
  
  return (
<>
<section className={style.pageHeader}>
  <div className={`container ${style.pageHeaderInner}`}>
    <span className="eyebrow">Catalog</span>
    <h1 className={style.pageHeaderTitle}>All products</h1>
    <p className={style.pageHeaderSub}>Search the full catalog by product title — the list narrows as you type.</p>
  </div>
</section>

<section className={`section ${style.catalogBody}`}>
  <div className="container">
    <div className={style.toolbar}>
      <div className={style.searchBox}>
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
          <path d="m20 20-3.2-3.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
        <input className={style.input} type="text" value={searchVal} placeholder='Search product title or description' aria-label="Search products" onChange={e=>setSearchVal(e.target.value)}/>
        {
          console.log(searchVal)
          
        }
      </div>
      <p className={style.count}>
        {searchVal.trim() ? `${filterData.length} match${filterData.length === 1 ? "" : "es"}` : `${apiResponse.length} products`}
      </p>
    </div>

    <div className={style.grid}>
      {
       !searchVal.trim()   && apiResponse.length > 0 ? apiResponse.map((product)=>{

return (
  <ProductCard  key={product.id}   product={product}/>
)
  }) :  filterData.length > 0 ? filterData.map( (product)=>{
return (
  <ProductCard  key={product.id}   product={product}/>
)
  } ) : searchVal.trim() && filterData.length == 0  ?  (
    <div className={style.empty}>
      <span className={style.emptyIcon}>
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
          <path d="m20 20-3.2-3.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </span>
      <h3 className={style.emptyTitle}>No products found</h3>
      <p className={style.emptyText}>Nothing in the catalog matches &ldquo;{searchVal}&rdquo;. Try a different title.</p>
    </div>
  ) : null
}
    </div>
  </div>
</section>
</>

)
}

export default AllProducts