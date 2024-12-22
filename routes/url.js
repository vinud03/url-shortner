const express = require('express');
const router = express.Router();
const urlController = require('../controllers/url');

router.post('/urlShortner', urlController.generateShortUrlHandler);

router.get('/geturl/:id', urlController.redirectToActualUrlHandler )

router.get('/analytics/:id', urlController.getUrlAnalyticsHandler);

router.post('/', urlController.handleUrlShortner)

module.exports = router;