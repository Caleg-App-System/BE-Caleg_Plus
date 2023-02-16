"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Tps extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Tps.belongsTo(models.Desa, {
        foreignKey: "desa_id",
        as: "desa",
      });
      Tps.hasMany(models.Suara, {
        foreignKey: "tps_id",
        as: "suara",
      });
    }
  }
  Tps.init(
    {
      name: DataTypes.STRING,
      desa_id: DataTypes.INTEGER,
    },
    {
      sequelize,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
      modelName: "Tps",
    }
  );
  return Tps;
};
