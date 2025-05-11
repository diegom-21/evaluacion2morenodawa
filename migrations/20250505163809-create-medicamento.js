'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Medicamentos', {
      CodMedicamento: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      descripcionMed: {
        type: Sequelize.STRING,
        allowNull: false
      },
      fechaFabricacion: {
        type: Sequelize.DATE,
        allowNull: false
      },
      fechaVencimiento: {
        type: Sequelize.DATE,
        allowNull: false
      },
      Presentacion: {
        type: Sequelize.STRING,
        allowNull: false
      },
      stock: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      precioVentaUni: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      precioVentaPres: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      CodTipoMed: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'TipoMedics',
          key: 'CodTipoMed'
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      },
      Marca: {
        type: Sequelize.STRING,
        allowNull: false
      },
      CodEspec: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Medicamentos');
  }
};
