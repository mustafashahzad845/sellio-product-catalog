import React, { useEffect, useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import style from "./style.module.css"
import axios from 'axios'
import ProductCard from './components/card'
import AllProducts from './components/allProducts'


const App = () => {
const [apiResponse , setApiResponse] = useState([])
const getData = async ()=>{

try {
  const data =  await (await axios.get("https://dummyjson.com/products/")).data.products
  console.log(data);
  setApiResponse(data)
  // data.products.map()
} catch (error) {
  console.log("Error");
}

  }

  console.log(apiResponse);
  
  useEffect( ()=>{
    getData()
  }  , [])
  
  return (
    <>

<div>
<Link className={style.navLinks} to={"/"}>Home</Link>
<Link className={style.navLinks} to={"/about"}>About Link</Link>
<Link className={style.navLinks} to={"/product"}>Product Page</Link>
<Link className={style.navLinks} to={"/contact"}>Contact Link</Link>
</div>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route  path='/product' 
      element={<AllProducts apiResponse={apiResponse} />}
      />
    </Routes>




    </>



  )
}

export default App