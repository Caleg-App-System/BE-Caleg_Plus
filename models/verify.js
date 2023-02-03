"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Verify extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Verify.init(
    {
      user_id: DataTypes.INTEGER,
      token: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Verify",
    }
  );
  return Verify;
};
