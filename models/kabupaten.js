"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Kabupaten extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Kabupaten.belongsTo(models.Provinsi, {
        foreignKey: "provinsi_id",
        as: "provinsi",
      });

      Kabupaten.hasMany(models.Kecamatan, {
        foreignKey: "kabupaten_id",
        as: "kecamatan",
      });
    }
  }
  Kabupaten.init(
    {
      name: DataTypes.STRING,
      provinsi_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Kabupaten",
    }
  );
  return Kabupaten;
};
