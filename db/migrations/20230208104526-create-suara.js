"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Suaras", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      dpp_id: {
        type: Sequelize.INTEGER,
      },
      caleg_id: {
        type: Sequelize.INTEGER,
      },
      political_party_id: {
        type: Sequelize.INTEGER,
      },
      tps_id: {
        type: Sequelize.INTEGER,
      },
      year_id: {
        type: Sequelize.INTEGER,
      },
      count: {
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
    await queryInterface.dropTable("Suaras");
  },
};
