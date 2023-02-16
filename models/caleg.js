"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Caleg extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Caleg.belongsTo(models.PoliticalParty, {
        foreignKey: "political_party_id",
        as: "political_party",
      });

      Caleg.hasMany(models.Suara, {
        foreignKey: "caleg_id",
        as: "caleg",
      });

      Caleg.hasMany(models.Dpp, {
        foreignKey: "caleg_id",
        as: "caleg_dpp",
      });
    }
  }
  Caleg.init(
    {
      name: DataTypes.STRING,
      position: DataTypes.STRING,
      political_party_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Caleg",
    }
  );
  return Caleg;
};
