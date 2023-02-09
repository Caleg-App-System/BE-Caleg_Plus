"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Desa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Desa.belongsTo(models.Kecamatan, {
        foreignKey: "kecamatan_id",
        as: "kecamatan",
      });

      Desa.hasMany(models.Tps, {
        foreignKey: "desa_id",
        as: "tps",
      });
    }
  }
  Desa.init(
    {
      name: DataTypes.STRING,
      kecamatan_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Desa",
    }
  );
  return Desa;
};
