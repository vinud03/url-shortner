const express = require("express");
const router = express.Router();
const userController = require('../controllers/user');

router.post('/api/login', userController.handleUserLogin );

router.post('/api/signup', userController.handleUserSignUp );

router.post('/', userController.handleUserLogin)

module.exports = router;
