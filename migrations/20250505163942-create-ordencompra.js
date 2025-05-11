'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('OrdenCompras', {
      NroOrdenC: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fechaEmision: {
        type: Sequelize.DATE,
        allowNull: false
      },
      Situacion: {
        type: Sequelize.STRING,
        allowNull: false
      },
      Total: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      CodLab: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Laboratorios',
          key: 'CodLab'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      NrofacturaProv: {
        type: Sequelize.STRING,
        allowNull: false
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
    await queryInterface.dropTable('OrdenCompras');
  }
};
