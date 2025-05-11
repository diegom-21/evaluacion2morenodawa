// server.js
require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');

// Middleware para analizar el cuerpo de la solicitud
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// Middleware global para que la variable `user` esté disponible en todas las vistas
app.use((req, res, next) => {
    res.locals.user = req.user || null;
    next();
});

// Directorio para archivos estáticos
app.use(express.static('public'));

// Configurar el motor de plantillas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Ruta raíz redirige al login
app.get('/', (req, res) => {
    res.redirect('/login');
});

// Rutas de autenticación
const authRoutes = require('./routes/auth.routes');
app.use('/', authRoutes);

// Rutas de dashboard (si las tienes configuradas en 'dashboard.routes.js')
const dashboardRoutes = require('./routes/dashboard.routes');
app.use('/dashboard', dashboardRoutes); // Cambié la ruta de dashboard para evitar conflictos

const laboratorioRoutes = require('./routes/laboratorio.routes');
app.use('/laboratorios', laboratorioRoutes);

const medicamentoRoutes = require('./routes/medicamento.routes')
app.use('/medicamentos' ,medicamentoRoutes)

const ordencomprasRoutes = require('./routes/ordencompra.routes')
app.use('/ordencompras',ordencomprasRoutes)

const detalleOrdenCompraRoutes = require('./routes/detalleordencompra.route');
app.use('/detalleordencompras', detalleOrdenCompraRoutes);

// Escuchar en el puerto 3000
app.listen(3000, () => {
    console.log('Servidor en http://localhost:3000');
});
