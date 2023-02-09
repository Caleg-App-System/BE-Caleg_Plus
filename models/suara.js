"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Suara extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Suara.belongsTo(models.Caleg, {
        foreignKey: "caleg_id",
        as: "caleg",
      });
      Suara.belongsTo(models.PoliticalParty, {
        foreignKey: "political_party_id",
        as: "political_party",
      });
      Suara.belongsTo(models.Dpp, {
        foreignKey: "dpp_id",
        as: "dpp",
      });
      Suara.belongsTo(models.Tps, {
        foreignKey: "tps_id",
        as: "tps",
      });
    }
  }
  Suara.init(
    {
      dpp_id: DataTypes.INTEGER,
      caleg_id: DataTypes.INTEGER,
      political_party_id: DataTypes.INTEGER,
      tps_id: DataTypes.INTEGER,
      year: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Suara",
    }
  );
  return Suara;
};
