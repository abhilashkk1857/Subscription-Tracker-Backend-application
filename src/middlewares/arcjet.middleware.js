import aj from "../config/arcjet.js";


const arcjetMiddleware = async (req, res, next) => {
    try {

        const decision = await aj.protect(req, { requested: 1});

        if(decision.isDenied()){
            if(decision.reason.isRateLimit()){
                return res.status(429).json({error: "Rate limit exceeded."});
            }

            if(decision.reason.isBot()){
                return res.status(403).json({error: "Bot Detected."});
            }

            return res.status(403).json({error: "Forbidden."});
        }

        next();
        
    } catch (error) {
        // console.error(`arcjetMiddleware error: ${error}`);
        next(error);
    }
};



const arcjetEmailValidater = async (req, res, next) => {
    try {
        const decision = await aj.protect(req, {email: req.body.email });

        if(decision.isDenied()){
            if(decision.reason.isEmail()){
                return res.status(403).json({error: "Invalid Email."});
            }

            return res.status(403).json({error: "Invalid Email.."});
        }

        next();
    } catch (error) {
        // console.log(`The email validator error.`);
        next(error);
    }
}




export  {arcjetMiddleware, arcjetEmailValidater};