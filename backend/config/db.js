import mongoose, { mongo } from "mongoose";
import {MONGODB_URI} from "./env.js";

//  const client = new MongoClient(MONGODB_URI)
//  let db;
//  let productCollection;
const mongodbConnection = async () => {
//   await client.connect()
// db = client.db("sellio-product")
// productCollection = db.collection("products") 
  mongoose
    .connect(MONGODB_URI)
    .then((data) => {
      console.log("MongoDB COnnected");
    })
    .catch((err) => {
      console.log("Error", err);
    });
};

export default mongodbConnection;
