const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const userRoute = require("./routes/users")
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");

var cors = require('cors');
app.use(cors());
dotenv.config()
mongoose.connect(
    process.env.MONGO_URL
).then(()=>console.log("MongoDB is connected")).catch((err)=>console.log(err)
);
app.use(express.json());


app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
app.use("/api/products",productRoute);







app.listen(process.envPORT || 5000 ,()=>{
    console.log("backend server is running")
})