const User = require("../models/user-model");
const bycrypt = require('bcryptjs')

// Home Logic 

const home = async (req, res) => {
  try {
    res.status(200).json({ msg: "Welcome to our home page" });
  } catch (error) {
    console.log(error);
  }
};

//* User Registration Logic 📝

const register = async (req, res) => {
  try {
    console.log(req.body);
    const { username, email, phone, password } = req.body;

    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({ msg: "email already exists" });
    }

    const userCreated = await User.create({ username, email, phone, password });

    res.status(201).json({ msg: "User Created Successfull", token: await userCreated.generateToken(), userId: userCreated._id.toString(),});
  } catch (error) {
    console.log(error)
    // res.status(500).json({ message: "Internal server error", error });
    next(error)
  }
};


// User Login
const login = async(req , res)=>{
try {
  const {email, password} = req.body;
  const userExist = await User.findOne({email});
  if(!userExist){
    return res.status(400).json({message:"Invalid Credential"});
  }
  const user = await userExist.comparePassword(password)
  if(user){
    res.status(200).json({
      msg: "Login Successfull",
      token: await userExist.generateToken(),
      userId: userExist._id.toString(),
    });
  }
  else{
    res.status(401).json({
      msg: "Invalid Email Id or Password "
    })
  }
} catch (error) {
  console.log(error)
}
}

//user authentication
//to send user data
const user = async(req, res)=>{
  try {
    const userData = req.user;
    console.log(userData);
    return res.status(200).json({
      userData
    })
  } catch (error) {
    console.log(`Error From root , ${error}`)
  }
}

module.exports = { home, register, login, user };