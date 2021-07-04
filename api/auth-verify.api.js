const router = require("express").Router();


router.get("/:token", async (request, response) => {
    if(!request.params.token) return response.status(400).json({message: "We were unable to find a user for this token."});

    try {
        // Find a matching token
        



        // If we found a token, find a matching user

    
    } catch (error) {
        response.status(500).json({message: error.message})
    }
})
// api/auth/verify
module.exports = router;