// routes/ordencompras.js
const express = require('express');
const router = express.Router();
const ordenCompraController = require('../controllers/ordencompras.controller');
const { OrdenCompra, Laboratorio } = require('../models');

// Obtener todas las órdenes de compra
router.get('/', ordenCompraController.getAllOrdenes);


// Crear una nueva orden de compra
router.get('/create', async (req, res) => {
  try {
    const laboratorios = await Laboratorio.findAll();
    res.render('ordencompras/create', { laboratorios });
  } catch (error) {
    console.error('Error al cargar la vista de creación:', error);
    res.status(500).send('Error al cargar la vista de creación');
  }
});

router.post('/create', ordenCompraController.createOrden);



// Actualizar una orden de compra
router.get('/edit/:NroOrdenC', async (req, res) => {
  const { NroOrdenC } = req.params;
  const orden = await OrdenCompra.findByPk(NroOrdenC);
  const laboratorios = await Laboratorio.findAll(); // Obtener laboratorios
  res.render('ordencompras/edit', { orden, laboratorios });
});
router.post('/edit/:NroOrdenC', ordenCompraController.updateOrden);

// Eliminar una orden de compra
router.post('/delete/:NroOrdenC', ordenCompraController.deleteOrden);




// Ver detalle de una orden de compra
router.get('/:NroOrdenC', ordenCompraController.getOrdenById);

module.exports = router;
