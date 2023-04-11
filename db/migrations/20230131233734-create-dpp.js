"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Dpps", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      no_KK: {
        type: Sequelize.STRING,
      },
      nik: {
        type: Sequelize.STRING,
      },
      name: {
        type: Sequelize.STRING,
      },
      dob_place: {
        type: Sequelize.STRING,
      },
      dob: {
        type: Sequelize.STRING,
      },
      marital_status: {
        type: Sequelize.STRING,
      },
      gender: {
        type: Sequelize.STRING,
      },
      address: {
        type: Sequelize.STRING,
      },
      disability: {
        type: Sequelize.STRING,
      },
      keterangan: {
        type: Sequelize.STRING,
      },
      photo_KK: {
        type: Sequelize.BLOB("long"),
      },
      photo_KTP: {
        type: Sequelize.BLOB("long"),
      },
      tps_id: {
        type: Sequelize.INTEGER,
      },
      is_check: {
        type: Sequelize.BOOLEAN,
      },
      is_under_age: {
        type: Sequelize.BOOLEAN,
      },
      is_new: {
        type: Sequelize.BOOLEAN,
      },
      is_acc: {
        type: Sequelize.BOOLEAN,
      },
      user_id: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Dpps");
  },
};
