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
      name: {
        type: Sequelize.STRING,
      },
      national_id: {
        type: Sequelize.STRING,
      },
      dob: {
        type: Sequelize.STRING,
      },
      address: {
        type: Sequelize.STRING,
      },
      tps_id: {
        type: Sequelize.INTEGER,
      },
      caleg_id: {
        type: Sequelize.INTEGER,
      },
      religion: {
        type: Sequelize.STRING,
      },
      job: {
        type: Sequelize.STRING,
      },
      image_national_card: {
        type: Sequelize.STRING,
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
