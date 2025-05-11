// models/detalleordencompra.js
module.exports = (sequelize, DataTypes) => {
    const DetalleOrdenCompra = sequelize.define('DetalleOrdenCompra', {
        NroOrdenC: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        CodMedicamento: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        descripcion: {
            type: DataTypes.STRING,
            allowNull: false
        },
        cantidad: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        precio: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        montouni: {
            type: DataTypes.FLOAT,
            allowNull: false
        }
    }, {
        tableName: 'detalleordencompras',
        timestamps: false // Deshabilitar el uso de createdAt y updatedAt
    });

    DetalleOrdenCompra.associate = function (models) {
        DetalleOrdenCompra.belongsTo(models.Medicamento, { foreignKey: 'CodMedicamento', as: 'medicamento' });
        DetalleOrdenCompra.belongsTo(models.OrdenCompra, { foreignKey: 'NroOrdenC', as: 'ordenCompra' });
    };

    return DetalleOrdenCompra;
};
