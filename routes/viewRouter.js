const express = require('express');
const router = express.Router();
const URL = require("../models/url");

router.get('/', async(req, res) => {
    const allUrls = await URL.find({});
    return res.render("home", {
        urls: allUrls
    });
})

router.get('/generate', async(req, res) => {
    return res.render('home');
})


module.exports = router;