'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // Eliminar las columnas createdAt y updatedAt de las tablas
    await queryInterface.removeColumn('tipomedics', 'createdAt');
    await queryInterface.removeColumn('tipomedics', 'updatedAt');
    await queryInterface.removeColumn('medicamentos', 'createdAt');
    await queryInterface.removeColumn('medicamentos', 'updatedAt');
    await queryInterface.removeColumn('detalleordencompras', 'createdAt');
    await queryInterface.removeColumn('detalleordencompras', 'updatedAt');
    await queryInterface.removeColumn('ordencompras', 'createdAt');
    await queryInterface.removeColumn('ordencompras', 'updatedAt');
    await queryInterface.removeColumn('laboratorios', 'createdAt');
    await queryInterface.removeColumn('laboratorios', 'updatedAt');
  },

  async down (queryInterface, Sequelize) {
    // Revertir los cambios (opcional, para restaurar los campos si es necesario)
    await queryInterface.addColumn('tipomedics', 'createdAt', {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.fn('NOW'),
    });
    await queryInterface.addColumn('tipomedics', 'updatedAt', {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.fn('NOW'),
    });
    await queryInterface.addColumn('medicamentos', 'createdAt', {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.fn('NOW'),
    });
    await queryInterface.addColumn('medicamentos', 'updatedAt', {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.fn('NOW'),
    });
    await queryInterface.addColumn('detalleordencompras', 'createdAt', {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.fn('NOW'),
    });
    await queryInterface.addColumn('detalleordencompras', 'updatedAt', {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.fn('NOW'),
    });
    await queryInterface.addColumn('ordencompras', 'createdAt', {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.fn('NOW'),
    });
    await queryInterface.addColumn('ordencompras', 'updatedAt', {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.fn('NOW'),
    });
    await queryInterface.addColumn('laboratorios', 'createdAt', {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.fn('NOW'),
    });
    await queryInterface.addColumn('laboratorios', 'updatedAt', {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.fn('NOW'),
    });
  }
};
