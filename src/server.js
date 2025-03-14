import express from "express";
import { PORT as port } from "./config/env.js";
import connectDB from "./database/mongodb.js";

import userRouter from "./routes/user.routes.js";
import subscriptionRouter from "./routes/subscription.routes.js";
import authRouter from "./routes/auth.routes.js";


const app = express();


app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/subscriptions",subscriptionRouter);


app.get("/", (req,res) => {
    res.status(200).json({messsage:"Welcome to the Subscription Tracker API!."});
});




app.listen(port, () => {
    console.log(`The server is listening to the port ${port}`);
    connectDB()     //connect to the DB.
});

