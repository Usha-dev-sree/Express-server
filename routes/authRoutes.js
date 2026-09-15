const express = require('express');
const { login, signup } = require('../controllers/authControllers');
const authRoutes = express.Router();

authRoutes.post("/login", login);
authRoutes.post("/signup", signup);
module.exports = authRoutes;
