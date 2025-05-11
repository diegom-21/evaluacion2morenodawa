const { Medicamento, TipoMedic } = require('../models');

exports.listar = async (req, res) => {
    try {
        const medicamentos = await Medicamento.findAll({
            include: [{ model: TipoMedic, as: 'tipoMedic' }]
        });
        res.render('medicamentos/index', { medicamentos });
    } catch (error) {
        console.error('Error al obtener medicamentos:', error);
        res.status(500).render('error', { message: 'Error interno del servidor' });
    }
};

exports.mostrarFormulario = async (req, res) => {
    try {
        const tiposMedicamento = await TipoMedic.findAll();
        res.render('medicamentos/create', { tiposMedicamento });
    } catch (error) {
        console.error('Error al cargar formulario:', error);
        res.status(500).render('error', { message: 'Error al cargar formulario' });
    }
};

exports.crear = async (req, res) => {
    try {
        const { descripcionMed, fechaFabricacion } = req.body;
        if (!descripcionMed || !fechaFabricacion) {
            return res.status(400).render('error', { message: 'Campos requeridos faltantes' });
        }

        await Medicamento.create(req.body);
        res.redirect('/medicamentos');
    } catch (error) {
        console.error('Error al registrar medicamento:', error);
        res.status(500).render('error', { message: 'Error al registrar medicamento' });
    }
};

exports.editarFormulario = async (req, res) => {
    try {
        const medicamento = await Medicamento.findByPk(req.params.id);
        const tiposMedicamento = await TipoMedic.findAll();

        if (!medicamento) {
            return res.status(404).render('error', { message: 'Medicamento no encontrado' });
        }

        res.render('medicamentos/edit', { medicamento, tiposMedicamento });
    } catch (error) {
        console.error('Error al cargar formulario de edición:', error);
        res.status(500).render('error', { message: 'Error interno del servidor' });
    }
};

exports.actualizar = async (req, res) => {
    try {
        const medicamento = await Medicamento.findByPk(req.params.id);
        if (!medicamento) {
            return res.status(404).render('error', { message: 'Medicamento no encontrado' });
        }

        await medicamento.update(req.body);
        res.redirect('/medicamentos');
    } catch (error) {
        console.error('Error al actualizar medicamento:', error);
        res.status(500).render('error', { message: 'Error al actualizar medicamento: ' + error.message });
    }
};

exports.eliminar = async (req, res) => {
    try {
        const result = await Medicamento.destroy({
            where: { CodMedicamento: req.params.id }
        });

        if (result === 0) {
            return res.status(404).render('error', { message: 'Medicamento no encontrado' });
        }

        res.redirect('/medicamentos');
    } catch (error) {
        console.error('Error al eliminar medicamento:', error);
        res.status(500).render('error', { message: 'Error al eliminar medicamento: ' + error.message });
    }
};
