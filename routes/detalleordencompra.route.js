const express = require('express');
const router = express.Router();
const detalleController = require('../controllers/detalleordencompra.controller');

// Listar todos los detalles de orden de compra
router.get('/', detalleController.listar);

// Mostrar formulario para crear nuevo detalle
router.get('/create', detalleController.mostrarFormulario);

// Procesar creación de un nuevo detalle
router.post('/create', detalleController.crear);

// Mostrar formulario de edición de un detalle específico



router.get('/edit/:NroOrdenC/:CodMedicamento', detalleController.mostrarFormularioEdicion);

// Procesar actualización del detalle
router.post('/edit/:NroOrdenC/:CodMedicamento', detalleController.actualizar);

// Procesar eliminación del detalle
router.post('/delete/:NroOrdenC/:CodMedicamento', detalleController.eliminar);

module.exports = router;
