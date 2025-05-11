const express = require('express');
const router = express.Router();
const laboratorioController = require('../controllers/laboratorio.controller');

// Mostrar todos los laboratorios
router.get('/', laboratorioController.listar);


// Mostrar formulario de creación
router.get('/create', laboratorioController.mostrarFormulario);

// Procesar creación
router.post('/', laboratorioController.crear);

// Mostrar formulario de edición
router.get('/edit/:id', laboratorioController.mostrarFormularioEdicion);

// Procesar actualización
router.post('/update/:id', laboratorioController.actualizar);

router.post('/:id/delete', laboratorioController.eliminarLaboratorio);

module.exports = router;
