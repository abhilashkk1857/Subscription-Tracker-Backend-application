import mongoose from "mongoose";
import { DB_URI as uri} from "../config/env.js";


const connectDB = async () => {
    try {
        await mongoose.connect(uri)
        console.log("DB connected successfully!")
    }
    catch(err) {
        console.log(`Unable to connect with the Database.${err}`)
        process.exit(1)
    }
}


export default connectDB;