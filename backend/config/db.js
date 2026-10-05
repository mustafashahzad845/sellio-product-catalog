import mongoose from "mongoose";
import {MONGODB_URI} from "./env.js";

const mongodbConnection = () => {
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
