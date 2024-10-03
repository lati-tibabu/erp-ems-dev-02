// This middleware function is used to validate the JWT token sent in the request headers.
// The token is expected to be in the format "Bearer <token>".
// If the token is not present or is invalid, the function returns a 401 unauthorized response.
// If the token is valid, the function adds the user details to the request object and calls the next middleware function.

const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;

const authToken = (req, res, next) => {
    // Get the token from the request headers
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    // If the token is not present, return a 401 unauthorized response
    if (token == null) return res.sendStatus(401);

    // Verify the token using the secret key
    jwt.verify(token, JWT_SECRET, (err, user) => {
        // If the token is invalid, return a 401 unauthorized response
        if (err) return res.sendStatus(403);

        /****/ // If the token is valid, add the user details to the request object
        req.user = user;

        // Call the next middleware function
        next();
    });
};

module.exports = authToken;