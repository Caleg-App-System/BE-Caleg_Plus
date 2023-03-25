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
          name: "Tps 01",

          desa_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tps 02",

          desa_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tps 03",

          desa_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tps 04",
          desa_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tps 05",
          desa_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tps 06",
          desa_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tps 07",
          desa_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tps 08",
          desa_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tps 09",
          desa_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tps 10",
          desa_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tps 11",
          desa_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tps 11",
          desa_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tps 12",
          desa_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tps 13",
          desa_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tps 14",
          desa_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tps 01",
          desa_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tps 02",
          desa_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tps 03",
          desa_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tps 04",
          desa_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tps 05",
          desa_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tps 06",
          desa_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tps 07",
          desa_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tps 01",
          desa_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tps 02",
          desa_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tps 03",
          desa_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tps 04",
          desa_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tps 01",
          desa_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tps 02",
          desa_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tps 02",
          desa_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tps 02",
          desa_id: 4,
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
