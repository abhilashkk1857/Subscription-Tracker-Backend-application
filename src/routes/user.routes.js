import { Router } from "express";

const userRouter = Router();


userRouter.get("/",(req,res) => res.send({message:"get the users"}));

userRouter.get("/:id", (req,res) => res.send({message : "get an user"}));

userRouter.post("/", (req,res) => res.send({message : "create new user"}));

userRouter.put("/:id", (req,res) => res.send({message : "Update user info."}));

userRouter.delete("/:id", (req,res) => res.send({message : "Delete an user."}));




export default userRouter;



