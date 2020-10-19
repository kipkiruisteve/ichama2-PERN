'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Loan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Loan.belongsTo(models.Chama,{
        foreignKey: 'chamaId', 
        targetKey: 'id',
        onDelete: 'CASCADE',
      });
      Loan.belongsTo(models.User,{
        foreignKey: 'userId', 
        targetKey: 'id',
        onDelete: 'CASCADE',
      });
    }
  };
  Loan.init({
    amount: DataTypes.INTEGER,
    repaymentDate:DataTypes.DATE,
    isApproved:DataTypes.BOOLEAN,
    isPaid:DataTypes.BOOLEAN,
    isGranted:DataTypes.BOOLEAN,
    isDeclined:DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Loan',
  });
  return Loan;
};