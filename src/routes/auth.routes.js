import {Router} from "express";
import { signUp, singIn } from "../controllers/auth.controller.js";


const authRouter = Router();



authRouter.post("/sign-up", signUp );

authRouter.post("/sign-in", singIn );

authRouter.post("/sign-out",(req,res) => res.json({title:"SignOut"}));



export default authRouter;