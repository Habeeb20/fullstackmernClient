import User from "../models/user.model.js";
import bcrypt from 'bcryptjs'
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken"
import dotenv from 'dotenv'
dotenv.config()

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10)

  const newUser = new User({ username, email, password: hashedPassword });

  try {
    await newUser.save();
    res.status(201).json({ message: "saved successfully" });
  } catch (error) {
    next(error);
  }
};

export const signIn = async(req, res, next) => {
  const {email, password} = req.body;

  try {
    const validUser = await User.findOne({email})
    if(!validUser){
      return next(errorHandler(404, 'user not found'))
    }

    const validPassword = bcrypt.compareSync(password, validUser.password);
    if(!validPassword){
      return next(errorHandler(401,  'wrong credentials'))
    }
    const token = jwt.sign({id: validUser._id},process.env.SECRET) 
    const {password: hashedPassword, ...rest} = validUser._doc;
    const expiryDate = new Date(Date.now() + 3600000);
    res.cookie('access_token', token, {httpOnly: true, expires: expiryDate}).status(200).json(rest)
  } catch (error) {
    next(error)
    
  }

}
