"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PoliticalParty extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      PoliticalParty.hasMany(models.Caleg, {
        foreignKey: "political_party_id",
        as: "candidate",
      });
    }
  }
  PoliticalParty.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "PoliticalParty",
    }
  );
  return PoliticalParty;
};
