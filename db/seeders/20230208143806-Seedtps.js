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
      "tps",
      [
        {
          name: "TPS 1",
          desa_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "TPS 11",
          desa_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "TPS 21",
          desa_id: 3,
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
    await queryInterface.bulkDelete("tps", null, {});
  },
};
