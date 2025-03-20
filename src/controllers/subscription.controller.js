import Subscription from "../models/subscription.model.js";


//create a new subscription (POST req)
const createSubscription = async (req, res, next) => {

    try {

        const subsciption = await Subscription.create({
            ...req.body,
            user: req.user._id
        });
    
        res.status(201).json({success: true, message: "Subscription created successfully!", data: subsciption});

    } catch (error) {
        next(error);
    }

};

// get all the subscriptions of a user (GET req)

const getUserSubscriptions = async (req, res, next) => {

    try {
        const userId = req.user._id;
        const subsciptions = await Subscription.find({user:userId});
        
        if(subsciptions.length === 0){
            return res.status(404).json({success: false, message:"No subscription found."});
        }

        res.status(200).json({success: true, message: "Subscriptions", subsciptions: subsciptions});
       
    } catch (error) {
        next(error);
    }
    

}






export {createSubscription, getUserSubscriptions};