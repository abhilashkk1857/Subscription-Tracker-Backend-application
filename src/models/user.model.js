import {Schema, model} from "mongoose";


const userSchema = new Schema({

    name: {
        type: String,
        required: [true, "username is required."],
        trim: true,
        minLength: 2,
        maxLength: 50
    },

    email: {
        type: String,
        required: [true, "user's email is required."],
        unique: true,
        trim: true,
        lowercase: true,
        match: [/\S+@\S+\.\S+/, "Please fill a valid email address" ]
    },

    password: {
        type: String,
        required: [true, "The user password is required."],
        minLength: 5
    }

},
{
    timestamps: true
}

);




const User = model("User", userSchema);

export default User;