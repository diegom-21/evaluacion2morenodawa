const jwt = require('jsonwebtoken');
const { Usuario, Rol } = require('../models');

exports.showRegisterForm = (req, res) => {
    res.render('register', { error: null });
};

exports.registerUser = async (req, res) => {
    const { nombre, email, password, rol } = req.body;

    try {
        // Almacenar contraseña en texto plano (no recomendado para producción)
        await Usuario.create({
            nombre,
            email,
            password: password, // Almacena directamente en texto plano
            rolId: rol
        });

        res.redirect('/login');

    } catch (error) {
        console.error(error);
        res.status(500).render('register', { error: 'Error al registrar el usuario' });
    }
};

exports.showLoginForm = (req, res) => {
    res.render('login', { error: null });
};

exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const usuario = await Usuario.findOne({
            where: { email },
            include: [{ model: Rol, as: 'rol' }]
        });

        if (!usuario) {
            return res.render('login', { error: 'Usuario no encontrado' });
        }

        // Comparación directa de texto plano (sin bcrypt)
        if (password !== usuario.password) {
            return res.render('login', { error: 'Contraseña incorrecta' });
        }

        const token = jwt.sign(
            {
                id: usuario.id,
                email: usuario.email,
                username: usuario.username,  // ← Esto debería estar en el token
                rol: usuario.rol.nombre
            },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES_IN }
        );

        console.log('Token generado:', token);

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 24 * 60 * 60 * 1000 // 1 día
        });

        console.log('Cookie configurada con éxito');

        switch (usuario.rol.nombre) {
            case 'admin':
                return res.redirect('/dashboard/menu');
            case 'moderador':
                return res.redirect('/dashboard/moderador');
            case 'usuario':
                return res.redirect('/dashboard/usuario');
            default:
                return res.redirect('/dashboard');
        }

    } catch (err) {
        console.error(err);
        res.status(500).render('login', { error: 'Error en el servidor' });
    }
};

exports.logout = (req, res) => {
    res.clearCookie('token');
    res.redirect('/login');
};