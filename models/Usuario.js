// models/usuario.js
module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define('Usuario', {
      id: { // Cambiado de CodUsuario a id
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      rolId: { // Cambiado de CodRol a rolId
        type: DataTypes.INTEGER,
        references: {
          model: 'rols',
          key: 'id' // Asegurarse de que coincida con la base de datos
        }
      }
    }, {
      tableName: 'usuarios',
      timestamps: true, // Mantener createdAt y updatedAt
      createdAt: 'createdAt',
      updatedAt: 'updatedAt'
    });

    Usuario.associate = function(models) {
      Usuario.belongsTo(models.Rol, { foreignKey: 'rolId', as: 'rol' }); // Actualizar la asociación
    };

    return Usuario;
};
