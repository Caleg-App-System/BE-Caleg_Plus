"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Provinsi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Provinsi.hasMany(models.Kabupaten, {
        foreignKey: "provinsi_id",
        as: "kabupaten",
      });
    }
  }
  Provinsi.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Provinsi",
    }
  );
  return Provinsi;
};
