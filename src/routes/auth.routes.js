import {Router} from "express";


const authRouter = Router();



authRouter.post("/sign-up",(req,res) => res.json({title:"SignUp"}));

authRouter.post("/sign-in",(req,res) => res.json({title:"SignIn"}));

authRouter.post("/sign-out",(req,res) => res.json({title:"SignOut"}));



export default authRouter;