module.exports = (sequelize, DataTypes) => {
    const Medicamento = sequelize.define('Medicamento', {
        CodMedicamento: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: false // ← Cambiado si los IDs son manuales
        },
        descripcionMed: DataTypes.STRING,
        fechaFabricacion: DataTypes.DATE,
        fechaVencimiento: DataTypes.DATE,
        Presentacion: DataTypes.STRING,
        stock: DataTypes.INTEGER,
        precioVentaUni: DataTypes.FLOAT,
        precioVentaPres: DataTypes.FLOAT,
        CodTipoMed: DataTypes.INTEGER,
        Marca: DataTypes.STRING,
        CodEspec: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    }, {
        tableName: 'medicamentos',
        timestamps: false // ← Agregar si no tienes 'createdAt' y 'updatedAt'
    });

    Medicamento.associate = function (models) {
        Medicamento.belongsTo(models.TipoMedic, { 
            foreignKey: 'CodTipoMed',
            as: 'tipoMedic'
        });
        Medicamento.hasMany(models.DetalleOrdenCompra, {
            foreignKey: 'CodMedicamento',
            as: 'detalleOrdenCompras'
        });
    };

    return Medicamento;
};