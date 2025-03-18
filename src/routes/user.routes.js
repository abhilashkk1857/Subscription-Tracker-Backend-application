import { Router } from "express";
import { getUser, getUsers } from "../controllers/user.controller.js";
import authRouter from "./auth.routes.js";
import authorize from "../middlewares/auth.middleware.js";

const userRouter = Router();


userRouter.get("/", getUsers);

userRouter.get("/:id", authorize, getUser );

userRouter.post("/", (req,res) => res.send({message : "create new user"}));

userRouter.put("/:id", (req,res) => res.send({message : "Update user info."}));

userRouter.delete("/:id", (req,res) => res.send({message : "Delete an user."}));




export default userRouter;



