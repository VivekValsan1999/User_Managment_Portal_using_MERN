const express=require('express');
const { fetchAllUsers, fetchUserById, createuser, updateuser, deleteUser } = require('../controller/controller');
const routes=express.Router();

routes.get("/",fetchAllUsers);
routes.get("/:id",fetchUserById);
routes.post("/",createuser);
routes.put("/:id",updateuser);
routes.delete("/:id",deleteUser);

module.exports=routes;