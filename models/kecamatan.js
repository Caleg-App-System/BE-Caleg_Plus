"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Kecamatan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    static associate(models) {
      Kecamatan.belongsTo(models.Kabupaten, {
        foreignKey: "kabupaten_id",
        as: "kabupaten",
      });

      Kecamatan.hasMany(models.Desa, {
        foreignKey: "kecamatan_id",
        as: "desa",
      });
    }
  }
  Kecamatan.init(
    {
      name: DataTypes.STRING,
      kabupaten_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Kecamatan",
    }
  );
  return Kecamatan;
};
