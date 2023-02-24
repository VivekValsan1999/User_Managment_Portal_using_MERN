const mongoose=require("mongoose");

// Schemm Model

const userManagmentSchema= new mongoose.Schema({
    Name:String,
    Position:String,
    Location:String,
    Salary:Number
})

const userModel=mongoose.model("userModel", userManagmentSchema);

module.exports=userModel;