'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pengumuman extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pengumuman.init({
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    is_read: DataTypes.BOOLEAN,
    is_archived: DataTypes.BOOLEAN,
    is_up: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Pengumuman',
  });
  return Pengumuman;
};