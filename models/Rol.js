// models/rol.js
module.exports = (sequelize, DataTypes) => {
    const Rol = sequelize.define('Rol', {
      id: { // Cambiado de CodRol a id
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nombre: { // Cambiado de descripcion a nombre para reflejar la base de datos
        type: DataTypes.STRING,
        allowNull: false
      }
    }, {
      tableName: 'rols',
      timestamps: true, // Mantener createdAt y updatedAt
      createdAt: 'createdAt',
      updatedAt: 'updatedAt'
    });

    Rol.associate = function(models) {
      // Aquí puedes definir las relaciones, si es necesario
    };

    return Rol;
};
