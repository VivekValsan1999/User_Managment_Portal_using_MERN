const mongoose=require("mongoose");
const dotenv=require("dotenv");

if(process.env.NODE_ENV != 'production'){
    dotenv.config({path:"./config.env"})
}

const connectDB=async()=>{
    try{
        mongoose.set("strictQuery",true);
        await mongoose.connect(process.env.DB_URL,{useNewUrlParser:true})
        console.log(`Connected to MongoDB`)
    }
    catch(error){
        console.log(`Error found:${error.message}`)
    }
}

module.exports=connectDB;