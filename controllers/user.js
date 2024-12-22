const user = require("../models/user");
const { v4: uuidv4 } = require("uuid");
const autService = require('../service/auth');

async function handleUserLogin(req, res) {
    const body = req.body;
    const userDetails = await user.findOne({email: body.email});
    if(userDetails && body && userDetails.password === body.passkey) {
        const sessionId = uuidv4();
        autService.setUserSessionId(sessionId, userDetails);
        res.cookie("sessionId", sessionId);
        return res.redirect("/generate");
    }
    return res.render('login',{error: 'Invalid userId or Password'});
}

async function handleUserSignUp(req, res) {
    const { name, passkey, email} = req.body;
    await user.create({
        name,
        email,
        password: passkey
    })
    return res.render("login");
}

module.exports = { handleUserLogin, handleUserSignUp }