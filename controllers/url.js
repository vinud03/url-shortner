const { nanoid } = require('nanoid');
const URL = require('../models/url');

async function generateShortUrlHandler(req, res) {
    const body = req.body;

    if(!body.url) {
        return res.status(400).json({error: 'Please provide url'});
    }
    const shortId = nanoid(8);
    const shortenUrl = await URL.create({
        shortId: shortId,
        redirectedUrl: body.url,
        visitHistory: []
    })   
    return res.json(shortenUrl);
}

async function redirectToActualUrlHandler(req, res) {
    const id = req.params.id
    const updateEntry = await URL.findOneAndUpdate({shortId: id}, {
        $push: {
            visitHistory : { timeStamp: Date.now()}
        }
    })
    res.redirect(updateEntry.redirectedUrl);
}

async function getUrlAnalyticsHandler(req, res) {
    const shortId = req.params.id;
    const analytics = await URL.findOne({shortId});
    res.json({totalVisits : analytics.visitHistory.length, analytics})
}

module.exports= {
    generateShortUrlHandler, redirectToActualUrlHandler, getUrlAnalyticsHandler
}