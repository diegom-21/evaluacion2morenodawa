// config.js
require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'postgres',  // Forzado a postgres
    dialectOptions: {      // Necesario para Render
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
};