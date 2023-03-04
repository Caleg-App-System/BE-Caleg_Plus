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
      "Tps",
      [
        {
          name: "Tps 1",
          desa_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tps 11",
          desa_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tps 21",
          desa_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tps 31",
          desa_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tps 41",
          desa_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tps 51",
          desa_id: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tps 61",
          desa_id: 7,
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
    await queryInterface.bulkDelete("Tps", null, {});
  },
};
