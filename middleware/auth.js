const authService = require('../service/auth');

async function restirctToLoggedInUserOnly(req,res, next) {
    const sessionToken = req.cookies?.sessionId;
    if(!sessionToken) {
        return res.redirect('/login');
    }
    const userDetails = authService.getUserSessionId(sessionToken);
    req.user = userDetails;
    userDetails ? next() : res.redirect('/login');
}

async function checkAuth(req, res, next) {
    const sessionToken = req.cookies?.sessionId;
    const userDetails = authService.getUserSessionId(sessionToken);
    req.user = userDetails;
    next();
}

module.exports= { restirctToLoggedInUserOnly, checkAuth };