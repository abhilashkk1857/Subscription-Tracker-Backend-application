import arcjet,{ shield, detectBot, tokenBucket, validateEmail } from "@arcjet/node";
import { ARCJET_KEY } from "./env.js"

const aj = arcjet({
    key: ARCJET_KEY,
    rules: [
        shield({ mode: "LIVE" }),

        detectBot({
          mode: "LIVE", 
          allow: [ "CATEGORY:SEARCH_ENGINE", "POSTMAN" ],
        }),
       
        tokenBucket({
          mode: "LIVE",
          refillRate: 5, // Refill 5 tokens per interval
          interval: 10, // Refill every 10 seconds
          capacity: 10, // Bucket capacity of 10 tokens
        }),

        validateEmail({
            mode: "LIVE", 
            deny: [ "DISPOSABLE", "INVALID", "NO_MX_RECORDS" ],
          }),
    ]
});




export default aj;