const express = require('express');
const router = express.Router();
const urlController = require('../controllers/url');

router.post('/urlShortner', urlController.generateShortUrlHandler);

router.get('/:id', urlController.redirectToActualUrlHandler )

router.get('/analytics/:id', urlController.getUrlAnalyticsHandler);

module.exports = router;