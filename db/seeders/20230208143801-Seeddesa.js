"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "desas",
      [
        {
          name: "Kedunggede",
          kecamatan_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Somagede",
          kecamatan_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Kemranjen",
          kecamatan_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("desas", null, {});
  },
};
