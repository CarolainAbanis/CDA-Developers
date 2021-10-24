const express = require('express');
const authController = require('../controllers/loginController');

const authRouter = express.Router();

authRouter.post('/google', authController.googleAuth);

module.exports = authRouter;