const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const { isAuthenticated } = require('../middleware/auth.middleware');

// Rutas públicas
router.get('/register', authController.showRegisterForm);
router.post('/register', authController.registerUser);
router.get('/login', authController.showLoginForm);
router.post('/login', authController.login);

// Ruta de logout (protegida)
router.get('/logout', isAuthenticated, authController.logout);

module.exports = router;