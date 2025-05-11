// models/ordencompra.js
module.exports = (sequelize, DataTypes) => {
    const OrdenCompra = sequelize.define('OrdenCompra', {
      NroOrdenC: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      fechaEmision: {
        type: DataTypes.DATE,
        allowNull: false
      },
      Situacion: {
        type: DataTypes.STRING,
        allowNull: false
      },
      Total: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      CodLab: {
        type: DataTypes.INTEGER,
        references: {
          model: 'laboratorios',
          key: 'CodLab'
        }
      },
      NrofacturaProv: {
        type: DataTypes.STRING,
        allowNull: false
      }
    }, {
      tableName: 'ordencompras',
      timestamps: false // Deshabilitar el uso de createdAt y updatedAt
    });
  
    OrdenCompra.associate = function(models) {
      OrdenCompra.belongsTo(models.Laboratorio, { foreignKey: 'CodLab', as: 'laboratorio' });
      OrdenCompra.hasMany(models.DetalleOrdenCompra, { foreignKey: 'NroOrdenC', as: 'detalleOrdenCompras' });
    };
  
    return OrdenCompra;
  };
  