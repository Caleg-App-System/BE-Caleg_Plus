"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Year extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Year.belongsTo(models.Suara, {
        foreignKey: "year_id",
        as: "suara",
      });
    }
  }
  Year.init(
    {
      year: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Year",
    }
  );
  return Year;
};
