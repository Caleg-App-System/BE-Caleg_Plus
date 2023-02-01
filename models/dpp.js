'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dpp extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Dpp.init({
    name: DataTypes.STRING,
    national_id: DataTypes.STRING,
    dob: DataTypes.STRING,
    address: DataTypes.STRING,
    religion: DataTypes.STRING,
    job: DataTypes.STRING,
    image_national_card: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Dpp',
  });
  return Dpp;
};