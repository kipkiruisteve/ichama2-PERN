'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Transactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      amount: {
        type: Sequelize.FLOAT
      },
      chamaId: {
        type: Sequelize.INTEGER,
        onDelete: 'set null',
        allowNull: false,
        references: {
          model: 'Chamas',
          key: 'id',
        }
      },
      userId:{
        type: Sequelize.INTEGER,
        onDelete: 'set null',
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id',
        }
      },
      isPaid:{
        type: Sequelize.BOOLEAN,
        defaultValue:false
      },
      nextPaymentDate:{
        allowNull: false,
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Transactions');
  }
};