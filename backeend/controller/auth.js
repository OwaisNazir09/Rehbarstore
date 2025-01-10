const { verifytoken } = require('../services/authuntication');

function checkforauth(cookieName) {
    return async (req, res, next) => {
        const tokencookievalue = req.cookies[cookieName];  // Get token from cookies
        if (!tokencookievalue) {
            return next();  // If no token, continue without user
        }

        try {
            const userPayload = await verifytoken(tokencookievalue); 
            req.user = userPayload;  // Attach user to request
            return next();  
        } catch (error) {
            console.error("Token verification failed:", error);
            return res.status(401).json({ message: 'Unauthorized' }); // Handle the error appropriately
        }
    };
}

module.exports = checkforauth;