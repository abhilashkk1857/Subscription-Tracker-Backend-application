import {Schema, model} from "mongoose";


const subscriptionSchema = new Schema({

    name: {
        type: String,
        required: [true, "Subscription name is required."],
        trim: true,
        minLength: 2,
        maxLength: 100
    },
    price: {
        type: Number,
        required: [true, "Price is required."],
        min: [0, "Price should be greater than 0"]
    },
    currency: {
        type: String,
        enum: ["INR", "USD", "EUR", "GBP" ],
        default: "INR"
    },
    frequency: {
        type: String,
        enum: ["daily", "weekly", "monthly", "yearly"]
    },
    category: {
        type: String,
        enum: ["sports", "entertainment", "news", "lifestyle", "technology", "finance", "politics", "other" ],
        required: [true, "A category needs to be selected."]
    },
    paymentMethod: {
        type: String,
        required: true,
        trim: true
    },
    status: {
        type: String,
        enum: ["active", "cancelled", "expired"],
        default: "active"
    },
    startDate: {
        type: Date,
        required: true,
        validate: {
            validator: (value) => value <= new Date(),
            message: "Start Date must be in the past."
        }
    },
    renewalDate: {
        type: Date,
        validate: {
            validator: function(value){
                value > this.startDate;
            },
            message: "The renewal Date must be after the Start Date."
        }
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
        index: true 
    }

},
{   timestamps: true    }
);


// Auto-calculate the renewal date , if it is missing.


subscriptionSchema.pre("save", function(next){

    if(!this.renewalDate){
        const renewalPeriod = {
            daily: 1,
            weekly: 7,
            monthly: 30,
            yearly: 365
        };

        this.renewalDate = new Date(this.startDate);
        this.renewalDate.setDate(this.renewalDate.getDate() + renewalPeriod[this.frequency]);

    }

    // and if the renewal-date is passed then autoupdate the renewal date.
    
    if(this.renewalDate < new Date()){
        this.status = "expired"
    }

    next();
})

const Subscription = model("Subscription", subscriptionSchema);


export default Subscription;




