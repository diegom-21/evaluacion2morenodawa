// models/laboratorio.js
module.exports = (sequelize, DataTypes) => {
    const Laboratorio = sequelize.define('Laboratorio', {
      CodLab: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      razonSocial: {
        type: DataTypes.STRING,
        allowNull: false
      },
      direccion: {
        type: DataTypes.STRING,
        allowNull: false
      },
      telefono: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      contacto: {
        type: DataTypes.STRING,
        allowNull: false
      }
    }, {
      tableName: 'laboratorios',
      timestamps: false // Deshabilitar el uso de createdAt y updatedAt
    });
  
    Laboratorio.associate = function(models) {
      Laboratorio.hasMany(models.OrdenCompra, { foreignKey: 'CodLab', as: 'ordenCompras' });
      //Laboratorio.hasMany(models.Medicamento, { foreignKey: 'CodLab', as: 'medicamentos' });
    };
  
    return Laboratorio;
  };
  