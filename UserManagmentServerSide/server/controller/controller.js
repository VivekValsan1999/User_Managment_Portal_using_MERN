const userModel=require("../model/userManagmentSchemaModel")

const fetchAllUsers=async(req,res)=>{
    try{
    const getUserdata= await userModel.find();
    res.json(getUserdata)
    }catch(error){
        res.json({message:error.message})
    }
};

const fetchUserById=async(req,res)=>{
    try{
    const getUserById = await userModel.findById(req.params.id);
    res.json(getUserById)
    }catch(error){
        res.json({message:error.message})
    }
};

const createuser=async(req,res)=>{
    const postName=req.body.Name;
    const postPosition=req.body.Position;
    const postLocation=req.body.Location;
    const postSalary=req.body.Salary;

    try{
        const postUser=await userModel.create({
            Name:postName,
            Position:postPosition,
            Location:postLocation,
            Salary:postSalary
        })
        res.json(postUser)
    }catch(error){
        console.log({message:error.message})
    }

}

const updateuser=async(req,res)=>{
    const putName=req.body.Name;
    const putPosition=req.body.Position;
    const putLocation=req.body.Location;
    const putSalary=req.body.Salary;
    try{
            await userModel.findByIdAndUpdate(req.params.id,({
            Name:putName,
            Position:putPosition,
            Location:putLocation,
            Salary:putSalary
        }))
        const updateUser=await userModel.findById(req.params.id);
        res.json(updateUser)
    }catch(error){
        res.json({message:error.message})
    }

}

const deleteUser=async(req,res)=>{
    try{
        const deleteUser=await userModel.findByIdAndDelete(req.params.id);
        res.json(`User with id:- ${id} is successfully deleted`)
    }catch(error){
        res.json({message:error.message})
    }
}

module.exports={
    fetchAllUsers,fetchUserById,createuser,updateuser,deleteUser
};