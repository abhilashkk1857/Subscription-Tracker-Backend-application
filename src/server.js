import express from "express"
import { PORT as port } from "./config/env.js"

const app = express()


app.get("/", (req,res) => {
    res.status(200).json({messsage:"Welcom to the root route."})
})




app.listen(port, () => {
    console.log(`The server is listening to the port ${port}`);
})

