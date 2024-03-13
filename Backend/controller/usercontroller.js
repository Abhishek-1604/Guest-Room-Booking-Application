const mongoose = require("mongoose");
const asyncHandler = require("express-async-handler");
const { userModel } = require("../model/usermodel");
const { genarateToken } = require("../config/genarateToken");
const path = require('path')


exports.userRegister = asyncHandler(async (req, res) => {
  const {role, name, email, password } = req.body;

  const useExist = await userModel.findOne({ email });
  if (useExist) {
    res.status(400);
    res.json({ msg: "already exists the user" });
    throw new Error("Already Exists");
  }

  // const ExPath = path.join(__dirname,pic)

  const newUser = await userModel.create({role, name, email, password });
  if (newUser) {
    res.status(200).json({ msg: "success", token: genarateToken(newUser._id) });
  } else {
    res.status(400).json({ msg: "error" });
  }
});

exports.getreg = async (req, res) => {
  const getregData = await userModel.find({});
  res.json(getregData);
};


exports.loginUser = asyncHandler(async (req, res) => {
  const { email, password, role } = req.body;

  const user = await userModel.findOne({ email });
  const userPass= await userModel.findOne({password});
  
  if (!user) {
    res.status(400).json({ msg: "Invalid user" });
    throw new Error("Invalid user");
  }

  
  // Check if the user's role matches the role provided in the request
  if (user.role !== role) {
    res.status(400).json({ msg: "Invalid role" });
    // throw new Error("Invalid role");
  }

  // Check if the password provided matches the user's password
  if(user && userPass){k
        return res.status(200).json({msg:"success"});
      }else{
        return res.status(400).json({msg:"invalid username or password"});
}
});
exports.getlogin = async (req, res) => {
  const getloginData = await userModel.find({});
  res.json(getloginData);
};

exports.regdelete = async(req,res) => {
  const {id} = req.params
  if(!mongoose.Types.ObjectId.isValid(id)){
      return res.status(400).json({"msg":"Task not Found"})
  }

  try{
      const regData = await userModel.findByIdAndDelete(id)
      res.status(200).json({msg:"deleted"})
  }
  catch(e){
      res.status(400).json({"msg":e.message})
  }
}