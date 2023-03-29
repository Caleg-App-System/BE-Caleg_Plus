"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      User.hasOne(models.Dpp, {
        foreignKey: "user_id",
        as: "user",
      });
    }
  }
  User.init(
    {
      email: DataTypes.STRING,
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      name: DataTypes.STRING,
      phone: DataTypes.STRING,
      address: DataTypes.STRING,
      working_area: DataTypes.STRING,
      photo: DataTypes.BLOB,
      photo_ktp: DataTypes.BLOB,
      role: DataTypes.STRING,
      email_token: DataTypes.STRING,
      is_archived: DataTypes.BOOLEAN,
      is_verified_account: DataTypes.BOOLEAN,
      is_verified_role: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};

// test
