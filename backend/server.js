import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import {setServers} from "node:dns/promises"
import mongodbConnection from "./config/db.js"
import { PORT } from "./config/env.js"
setServers(["8.8.8.8" , "1.1.1.1"])

const app = express()
app.use(express.json())
app.use(cors())

mongodbConnection()

app.listen(PORT, ()=>console.log(`Server ruuning on http://localhost:${PORT}`))