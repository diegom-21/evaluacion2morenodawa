const express = require('express');
const router = express.Router();
const medicamentoController = require('../controllers/medicamento.controller');

// Mostrar todos los medicamentos
router.get('/', medicamentoController.listar);

// Mostrar formulario de creación
router.get('/create', medicamentoController.mostrarFormulario);

// Procesar creación
router.post('/', medicamentoController.crear);

// Mostrar formulario de edición
router.get('/edit/:id', medicamentoController.editarFormulario);

// Procesar actualización (usando POST en lugar de PUT)
router.post('/actualizar/:id', medicamentoController.actualizar);

// Procesar eliminación (puedes mantenerlo si usas botones con JS o cambiarlo a POST también)
router.post('/eliminar/:id', medicamentoController.eliminar);

module.exports = router;
