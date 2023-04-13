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

      Dpp.belongsTo(models.User, {
        foreignKey: "user_id",
        as: "user",
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
      photo_KK: DataTypes.TEXT,
      photo_KTP: DataTypes.TEXT,
      tps_id: DataTypes.INTEGER,
      desa_id: DataTypes.INTEGER,
      usia: DataTypes.INTEGER,
      rt: DataTypes.INTEGER,
      rw: DataTypes.INTEGER,
      is_check: DataTypes.BOOLEAN,
      is_under_age: DataTypes.BOOLEAN,
      is_new: DataTypes.BOOLEAN,
      is_acc: DataTypes.BOOLEAN,
      user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Dpp",
    }
  );
  return Dpp;
};
