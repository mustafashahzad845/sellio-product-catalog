import React, { useEffect, useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import style from "./style.module.css"
import axios from 'axios'

const [apiResponse , setApiResponse] = useState("")

const App = () => {
  useEffect( ()=>{

  const data =  fetch("https://dummyjson.com/products/").then(res=>res.json())
  .then((result)=>{
    console.log(result)
setApiResponse(data)
  } )
  .catch((err)=>console.log("err"))



  } , [])
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