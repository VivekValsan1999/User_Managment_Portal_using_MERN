// importing dependencies
const express=require("express");
const mongoose=require("mongoose");
const dotenv=require("dotenv");
const morgan=require("morgan");
const bodyParser=require("body-parser");
const connectDB=require("./server/database/ConnectToDB");
const userModel=require("./server/model/userManagmentSchemaModel");
const routes=require("./server/routing/routing");

// setting up the express app
const app=new express();
app.use(express.json());

// setting up the port
if(process.env.NODE_ENV != 'production'){
    dotenv.config({path:"./config.env"})
}

const PORT= process.env.PORT || 8080;

// setting up the logs
app.use(morgan("tiny"));

// parsing the req body
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// connecting to DB
connectDB();

// routes
app.use("/user",routes);

// Listening to port
app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`)
});

