import User from "../model/User.js";
import bcrypt from "bcryptjs";

export const getAllUser = async (req, res, next) => {
  let users;
  try {
    users = await User.find();
  } catch (err) {
    console.log(err);
  }
  if (!users) {
    return res.status(404).json({ message: "no user found!" });
  }
  return res.status(200).json({ users });
};

export const signup = async (req, res, next) => {
  const { name, email, password } = req.body;
  let prevUser;
  try {
    prevUser = await User.findOne({ email });
  } catch (err) {
    return console.log(err);
  }
  if (prevUser) {
    return res.status(400).json({ message: "user already exists!" });
  }

  const hashedPassword = bcrypt.hashSync(password);
  const user = new User({
    name,
    email,
    password: hashedPassword,
  });

  try {
    await user.save();
  } catch (err) {
    console.log(err);
  }
  return res.status(201).json({ user });
};

export const login = async (req, res, next) => {
  const { name, password } = req.body;
  let prevUser;
  try {
    prevUser = await User.findOne({ name });
  } catch (err) {
    return console.log(err);
  }
  if (!prevUser) {
    return res
      .status(404)
      .json({ message: "could not find user associated with this name." });
  }
  const isPasswordCorrect=bcrypt.compareSync(password,prevUser.password)
  if(!isPasswordCorrect){
    return res.status(400).json({message:"Incorrect Password"})
  }
  return res.status(200).json({message:"Login Successfull"})
};

