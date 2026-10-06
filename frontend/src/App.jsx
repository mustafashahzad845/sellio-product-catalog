import React, { useEffect, useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import style from "./style.module.css"
import axios from 'axios'
import ProductCard from './components/card'


const App = () => {
const [apiResponse , setApiResponse] = useState("")
const getData = async ()=>{

  const data =  await fetch("https://dummyjson.com/products/").then(res=>res.json()).products
  console.log(data);
  
  // data.products.map()
} catch (error) {
  console.log("Error");
}

  }

  console.log(apiResponse);
  
  useEffect( ()=>{
    getData()
  }  , [])
  
apiResponse.map((product)=>{
return (
  <ProductCard product={product}/>
  
)
})
  }
  useEffect( getData()  , [])
  
  return (
    <>
{/* Navbar */}
<div >
<Link className={style.navLinks} to={"/"}>Home Link</Link>
<Link className={style.navLinks} to={"/about"}>About Link</Link>
<Link className={style.navLinks} to={"/contact"}>Contact Link</Link>
</div>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/contact" element={<Contact />}/>
    </Routes>




    </>



  )
}

export default App