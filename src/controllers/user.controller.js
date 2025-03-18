import User from "../models/user.model.js";

// get all the users

const getUsers = async (req,res,next) => {
    try{
        const users = await User.find();
        

        if(users.length === 0){
            const error = new Error("No user found there");
            error.statusCode = 404;
            throw error;
        }

        res.status(200).json({
            success: true,
            message: "Found the users",
            data: users
        })
    }
    catch(err){
        next(err);
    }
}



// to get a particular user by the id

const getUser = async (req,res,next) => {
    try{
        const user = await User.findById(req.params.id);
        console.log(`this is for debugging , this is the users ${user} `);

        if(!user){
            const error = new Error("User not Found!");
            error.statusCode  = 404;
            throw error;
        }

        res.status(200).json({
            success: true,
            message: "Got the user",
            data: user
        })
    }
    catch(err){
        next(err);
    }
} 



export {getUser, getUsers}