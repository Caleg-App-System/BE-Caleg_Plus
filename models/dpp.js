"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Dpp extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Dpp.belongsTo(models.Tps, {
        foreignKey: "tps_id",
        as: "tps",
      });

      Dpp.belongsTo(models.Caleg, {
        foreignKey: "caleg_id",
        as: "caleg",
      });
    }
  }
  Dpp.init(
    {
      no_KK: DataTypes.STRING,
      nik: DataTypes.STRING,
      name: DataTypes.STRING,
      dob_place: DataTypes.STRING,
      dob: DataTypes.STRING,
      marital_status: DataTypes.STRING,
      gender: DataTypes.STRING,
      address: DataTypes.STRING,
      disability: DataTypes.STRING,
      keterangan: DataTypes.STRING,
      photo_KK: DataTypes.BLOB,
      photo_KTP: DataTypes.BLOB,
      tps_id: DataTypes.INTEGER,
      is_check: DataTypes.BOOLEAN,
      is_under_age: DataTypes.BOOLEAN,
      is_new: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Dpp",
    }
  );
  return Dpp;
};
