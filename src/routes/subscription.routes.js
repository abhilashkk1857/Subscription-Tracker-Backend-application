import { Router } from "express";
import authorize from "../middlewares/auth.middleware.js";
import { createSubscription, getUserSubscriptions } from "../controllers/subscription.controller.js";

const subscriptionRouter = Router();




subscriptionRouter.get("/",authorize ,getUserSubscriptions);

subscriptionRouter.get("/:id", (req,res) => res.send({title:"GET  subscriptions details."}));

subscriptionRouter.post("/", authorize, createSubscription );

subscriptionRouter.put("/:id", (req,res) => res.send({title:"Update a subsciption."}));

subscriptionRouter.delete("/:id", (req,res) => res.send({title:"Delete a subscription."}));

subscriptionRouter.get("/user/:id", (req,res) => res.send({title:"GET user subscriptions."}));

subscriptionRouter.get("/:id/cancel", (req,res) => res.send({title:"Cancel a subscription."}));

subscriptionRouter.get("/upcoming-renewals", (req,res) => res.send({title:"GET upcoming renewals."}));



export default subscriptionRouter;