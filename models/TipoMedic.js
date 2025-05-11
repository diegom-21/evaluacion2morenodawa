// models/tipomedic.js
module.exports = (sequelize, DataTypes) => {
    const TipoMedic = sequelize.define('TipoMedic', {
      CodTipoMed: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      descripcion: {
        type: DataTypes.STRING,
        allowNull: false
      }
    }, {
      tableName: 'tipomedics',
      timestamps: false // Deshabilitar el uso de createdAt y updatedAt
    });
  
    TipoMedic.associate = function(models) {
      TipoMedic.hasMany(models.Medicamento, { foreignKey: 'CodTipoMed', as: 'medicamentos' });
    };
  
    return TipoMedic;
  };
  