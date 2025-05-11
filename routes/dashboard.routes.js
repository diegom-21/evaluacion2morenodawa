// routes/dashboard.routes.js
const express = require('express');
const router = express.Router();
const { isAuthenticated } = require('../middleware/auth.middleware');

router.get('/dashboard', isAuthenticated, (req, res) => {
    res.render('dashboard', { user: req.user });
});

// Ruta para el menú principal (administrador)
router.get('/menu', isAuthenticated, (req, res) => {
    res.render('menu', { user: req.user });
});

// Ruta para moderadores
router.get('/moderador', isAuthenticated, (req, res) => {
    res.render('moderador', { user: req.user });
});

// Ruta para usuarios
router.get('/usuario', isAuthenticated, (req, res) => {
    res.render('usuario', { user: req.user });
});

module.exports = router;
