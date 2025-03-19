import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../models/user.model.js";
import { JWT_SECRET, JWT_EXPIRES_IN } from "../config/env.js";


// controller for sign-up

const signUp = async (req,res,next) => {
    const session = await mongoose.startSession();
    session.startTransaction();

    try{
        const {name, email, password} = req.body;

        //check if the user already exists or not
        const alreadyExists = await User.findOne({email});

        if(alreadyExists){
            const error = new Error("User already exists with this email.");
            error.statusCode = 409;
            throw error;
        }

        // hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);
        // console.log(`This is the salt:-${salt} and this is the hashed password:${hashedPassword}`);

        // create a new user
        const newUser = await User.create([{name, email, password: hashedPassword}], {session});

        // generate a token for the user
        const token = jwt.sign({userId : newUser[0]._id}, JWT_SECRET, {expiresIn: JWT_EXPIRES_IN});

        await session.commitTransaction();
        session.endSession();

        res.status(201).json({
            success: true,
            message: "User created Successfully!",
            data: {
                token,
                user: newUser[0]
            }
        })


    }
    catch(err){
        await session.abortTransaction();
        session.endSession();
        next(err);
    }

}



// controller for sign-in 

const singIn = async (req, res, next) => {
    try{
        // grab the details
        const {email, password} = req.body;

        // check that the user exists or not
        const existingUser = await User.findOne({email});

        //if not a registered user
        
        if(!existingUser){
            const error = new Error("User not found!");
            error.statusCode = 404;
            throw error;
        }

        // validate the password
        const validPassword = await bcrypt.compare(password, existingUser.password);

        if(!validPassword){
            const error = new Error("Invalid Password!");
            error.statusCode = 401;
            throw error;
        }

        // genrate a token for the valid user
        const token = jwt.sign({userId:existingUser._id}, JWT_SECRET, {expiresIn: JWT_EXPIRES_IN});

        res.status(200).json({
            success: true,
            message: "user signed successfully!",
            data: {
                token,
                user: existingUser
            }
        })


    }
    catch(err){
        next(err);
    }
}






export {signUp, singIn};