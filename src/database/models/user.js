'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsToMany(models.Chama,{
        through:"ChamaUser",
        // as:'users',
        foreignKey:'userId'
      })
      User.hasMany(models.Transaction, {
        foreignKey: 'userId', 
        sourceKey: 'id',
      });
    }
  };
  User.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    pin: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    isOfficial:DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};