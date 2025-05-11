const { DetalleOrdenCompra, Medicamento, OrdenCompra } = require('../models');

// Listar todos los detalles
exports.listar = async (req, res) => {
    try {
        const detalles = await DetalleOrdenCompra.findAll({
            include: [
                { model: Medicamento, as: 'medicamento' },
                { model: OrdenCompra, as: 'ordenCompra' }
            ]
        });
        res.render('detalleordencompra/index', { detalles });
    } catch (error) {
        console.error('Error al obtener detalles:', error);
        res.status(500).send('Error interno del servidor');
    }
};

// Mostrar formulario de creación
exports.mostrarFormulario = async (req, res) => {
    try {
        const medicamentos = await Medicamento.findAll();
        const ordenes = await OrdenCompra.findAll();
        res.render('detalleordencompra/create', { medicamentos, ordenes });
    } catch (error) {
        console.error('Error al cargar formulario:', error);
        res.status(500).send('Error al cargar formulario de detalle');
    }
};

// Crear un nuevo detalle
exports.crear = async (req, res) => {
    try {
        const { NroOrdenC, CodMedicamento, descripcion, cantidad, precio, montouni } = req.body;

        await DetalleOrdenCompra.create({
            NroOrdenC,
            CodMedicamento,
            descripcion,
            cantidad,
            precio,
            montouni
        });

        res.redirect('/detalleordencompra');
    } catch (error) {
        console.error('Error al crear detalle:', error);
        res.status(500).send('Error al crear detalle de orden');
    }
};

// Mostrar formulario de edición
exports.mostrarFormularioEdicion = async (req, res) => {
    try {
        const { NroOrdenC, CodMedicamento } = req.params;
        const detalle = await DetalleOrdenCompra.findOne({ where: { NroOrdenC, CodMedicamento } });

        if (!detalle) return res.status(404).send('Detalle no encontrado');

        const medicamentos = await Medicamento.findAll();
        const ordenes = await OrdenCompra.findAll();

        res.render('detalleordencompra/edit', { detalle, medicamentos, ordenes });
    } catch (error) {
        console.error('Error al cargar formulario de edición:', error);
        res.status(500).send('Error al cargar formulario');
    }
};

// Actualizar detalle
exports.actualizar = async (req, res) => {
    try {
        const { NroOrdenC, CodMedicamento } = req.params;
        const { descripcion, cantidad, precio, montouni } = req.body;

        await DetalleOrdenCompra.update(
            { descripcion, cantidad, precio, montouni },
            { where: { NroOrdenC, CodMedicamento } }
        );

        res.redirect('/detalleordencompras');
    } catch (error) {
        console.error('Error al actualizar detalle:', error);
        res.status(500).send('Error al actualizar detalle');
    }
};

// Eliminar detalle
exports.eliminar = async (req, res) => {
    try {
        const { NroOrdenC, CodMedicamento } = req.params;
        await DetalleOrdenCompra.destroy({ where: { NroOrdenC, CodMedicamento } });
        res.redirect('/detalleordencompras');
    } catch (error) {
        console.error('Error al eliminar detalle:', error);
        res.status(500).send('Error al eliminar detalle');
    }
};
