const checkAuth = (req, res, next) => {
    // Check if user is authenticated
    if (req.isAuthenticated()) {
        // If authenticated, proceed to the next middleware
        return next();
    } else {
        // If not authenticated, redirect to login page or send an error response
        return res.status(401).send("Unauthorized");
    }
};

module.exports = checkAuth;