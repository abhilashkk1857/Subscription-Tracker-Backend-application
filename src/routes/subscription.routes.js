import { Router } from "express";

const subscriptionRouter = Router();




subscriptionRouter.get("/", (req,res) => res.send({title:"GET all subscriptions."}));

subscriptionRouter.get("/:id", (req,res) => res.send({title:"GET  subscriptions details."}));

subscriptionRouter.post("/", (req,res) => res.send({title:"POST all subscriptions."}));

subscriptionRouter.put("/:id", (req,res) => res.send({title:"Update a subsciption."}));

subscriptionRouter.delete("/:id", (req,res) => res.send({title:"Delete a subscription."}));

subscriptionRouter.get("/user/:id", (req,res) => res.send({title:"GET user subscriptions."}));

subscriptionRouter.get("/:id/cancel", (req,res) => res.send({title:"Cancel a subscription."}));

subscriptionRouter.get("/upcoming-renewals", (req,res) => res.send({title:"GET upcoming renewals."}));



export default subscriptionRouter;