// controllers/ordencompras.controller.js
const { OrdenCompra, Laboratorio } = require('../models');

// Obtener todas las órdenes de compra
exports.getAllOrdenes = async (req, res) => {
    try {
        const ordenes = await OrdenCompra.findAll({
            include: ['laboratorio'],
        });
        res.render('ordencompras/index', { ordenes });
    } catch (error) {
        res.status(500).send('Error al obtener las órdenes de compra');
    }
};

// Obtener una orden de compra por NroOrdenC
exports.getOrdenById = async (req, res) => {
    const { NroOrdenC } = req.params;
    try {
        const orden = await OrdenCompra.findByPk(NroOrdenC, {
            include: ['laboratorio'],
        });
        if (!orden) {
            return res.status(404).send('Orden de compra no encontrada');
        }
        res.render('ordencompras/detail', { orden });
    } catch (error) {
        res.status(500).send('Error al obtener la orden de compra');
    }
};

// Crear una nueva orden de compra
exports.createOrden = async (req, res) => {
    try {
        await OrdenCompra.create(req.body);
        res.redirect('/ordencompras');
    } catch (error) {
        console.error('Error al crear la orden de compra:', error); // Agrega esta línea
        res.status(500).send('Error al crear la orden de compra');
    }
};


// Actualizar una orden de compra
exports.updateOrden = async (req, res) => {
    const { NroOrdenC } = req.params;
    try {
        const orden = await OrdenCompra.findByPk(NroOrdenC);
        if (!orden) {
            return res.status(404).send('Orden de compra no encontrada');
        }
        await orden.update(req.body);
        res.redirect('/ordencompras');
    } catch (error) {
        res.status(500).send('Error al actualizar la orden de compra');
    }
};

// Eliminar una orden de compra
exports.deleteOrden = async (req, res) => {
    const { NroOrdenC } = req.params;
    try {
        const orden = await OrdenCompra.findByPk(NroOrdenC);
        if (!orden) {
            return res.status(404).send('Orden de compra no encontrada');
        }
        await orden.destroy();
        res.redirect('/ordencompras');
    } catch (error) {
        res.status(500).send('Error al eliminar la orden de compra');
    }
};
