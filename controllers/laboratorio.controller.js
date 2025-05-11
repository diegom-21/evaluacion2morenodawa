const { Laboratorio } = require('../models');

exports.listar = async (req, res) => {
    try {
        const laboratorios = await Laboratorio.findAll();
        res.render('laboratorios/index', { laboratorios });
    } catch (error) {
        console.error('Error al obtener laboratorios:', error);
        res.status(500).send('Error interno del servidor');
    }
};

// Mostrar formulario
exports.mostrarFormulario = (req, res) => {
    res.render('laboratorios/create');
};

// Crear laboratorio
exports.crear = async (req, res) => {
    try {
        const { CodLab, razonSocial, direccion, telefono, email, contacto } = req.body;

        await Laboratorio.create({
            CodLab,
            razonSocial,
            direccion,
            telefono,
            email,
            contacto
        });

        res.redirect('/laboratorios');
    } catch (error) {
        console.error('Error al registrar laboratorio:', error);
        res.status(500).send('Error interno al registrar el laboratorio');
    }
};

// Mostrar formulario con datos actuales
exports.mostrarFormularioEdicion = async (req, res) => {
    try {
        const lab = await Laboratorio.findByPk(req.params.id);
        if (!lab) return res.status(404).send('Laboratorio no encontrado');

        res.render('laboratorios/edit', { laboratorio: lab });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al cargar formulario de edición');
    }
};

// Actualizar laboratorio
exports.actualizar = async (req, res) => {
    try {
        const { razonSocial, direccion, telefono, email, contacto } = req.body;

        await Laboratorio.update(
            { razonSocial, direccion, telefono, email, contacto },
            { where: { CodLab: req.params.id } }
        );

        res.redirect('/laboratorios');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al actualizar laboratorio');
    }
};

// controllers/laboratorioController.js
const db = require('../models');

exports.eliminarLaboratorio = async (req, res) => {
    try {
        const id = req.params.id;
        await db.Laboratorio.destroy({ where: { CodLab: id } });
        res.redirect('/laboratorios');
    } catch (error) {
        console.error('Error al eliminar laboratorio:', error);
        res.status(500).send('Error al eliminar laboratorio');
    }
};


