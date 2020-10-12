'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Chama extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Chama.belongsToMany(models.User,{
        through:"ChamaUser",
        // as:'chamas',
        foreignKey:'chamaId'
      })
      Chama.hasMany(models.Transaction, {
        foreignKey: 'chamaId', 
        sourceKey: 'id',
      });
    }
  };
  Chama.init({
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    monthlyContribution:DataTypes.STRING,
    currentBalance:DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Chama',
  });
  return Chama;
};