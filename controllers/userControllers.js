const user = require("../Model/userSchema");

const createUser = async (req, res) => {
  console.log(req);
  const newuser = new user(req.body);
  try {
    await newuser.save();
    res.status(200).json({
      message: "User Created Successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getUsers= async(req,res)=>{
  const users=await user.find();
  try{
    res.status(200).json(users);
  }
  catch(e){
    console.log(e);
  }
}
const deleteUser=async(req,res)=>{
  const id=req.params.id;
  try{
    const deleteduser=await user.findByIdAndDelete(id);
    res.status(200).json(deleteduser);
  }
  catch(e){
    console.log(e);
  }
}
const getsingleuser=async(req,res)=>{
  const id=req.params.id;

  const singleuser=await user.findById(id);
  try{
    res.status(200).json(singleuser);

  }
  catch(e){
    console.log(e)
  }
}

const authenticate=async(res,req)=>{
  const username=req.body.username;
  const upassword=req.body.password;
  try{
    const user=await user.findOne({username:username});
    res.status(200).json(user);
  }
  catch(e){
    console.log(e)
    res.status(500).json({message:"internam server error"})
  }
}
module.exports = { createUser, getUsers,deleteUser,authenticate,getsingleuser};
