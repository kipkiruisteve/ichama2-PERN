'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Loans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
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
      amount: {
        type: Sequelize.INTEGER
      },
      repaymentDate:{
        type:Sequelize.DATE
      },
      isPaid:{
        type:Sequelize.BOOLEAN,
        defaultValue:false
      },
      isApproved:{
        type:Sequelize.BOOLEAN,
        defaultValue:false
      },
      isGranted:{
        type:Sequelize.BOOLEAN,
        defaultValue:false
      },
      isDeclined:{
        type:Sequelize.BOOLEAN,
        defaultValue:false
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
    await queryInterface.dropTable('Loans');
  }
};