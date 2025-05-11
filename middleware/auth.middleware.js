const jwt = require('jsonwebtoken');

exports.isAuthenticated = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    console.log('Acceso no autorizado: no hay token');
    return res.redirect('/login');
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    console.log('Usuario autenticado:', decoded.email, 'Rol:', decoded.rol);
    next();
  } catch (error) {
    console.error('Error al verificar token:', error);
    res.clearCookie('token');
    res.redirect('/login');
  }
};

exports.hasRole = (role) => {
  return (req, res, next) => {
    if (req.user && req.user.rol === role) {
      return next();
    }
    console.log(`Acceso denegado: el usuario ${req.user?.email} no tiene rol ${role}`);
    res.status(403).render('error', { 
      errorMessage: 'No tienes permiso para acceder a esta página' 
    });
  };
};