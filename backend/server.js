import express, { response } from "express"
import mongoose from "mongoose"
import cors from "cors"
import {setServers} from "node:dns/promises"
import mongodbConnection from "./config/db.js"
import { PORT } from "./config/env.js"
setServers(["8.8.8.8" , "1.1.1.1"])
import Product from "./models/productSchema.js"

const app = express()
app.use(express.json())
app.use(cors())

mongodbConnection()

app.get("/api/products" , async (req , response)=>{

    try {
        // const userCollection = mongoose.connection.db.collection("products")
    const data = await Product.find()
console.log(data);
response.json({
    status : true,
    data : data
})
    } catch (error) {
       console.log("error");
        response.json({
            status : false,
            data : null
        })
    }
    



 
})

app.listen(PORT, ()=>console.log(`Server ruuning on http://localhost:${PORT}`))