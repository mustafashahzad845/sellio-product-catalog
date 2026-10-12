import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import axios from 'axios'
import AllProducts from './pages/allProducts'
import ProductDetails from './pages/productDetails'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


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

    <Navbar />

    <Routes>
      <Route path="/" element={<Home apiResponse={apiResponse} />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route  path='/product' 
      element={<AllProducts apiResponse={apiResponse} />}
      />
      <Route path='/product-details/:id' element={<ProductDetails />} />
      {/* <Route  path='/product/:id' 
      element={<AllProducts apiResponse={apiResponse} />}
      /> */}
    </Routes>

    <Footer />

    </>
  )
}

export default App