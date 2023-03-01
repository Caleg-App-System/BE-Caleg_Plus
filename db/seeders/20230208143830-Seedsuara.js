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
      "Suaras",
      [
        {
          dpp_id: 1,
          caleg_id: 1,
          political_party_id: 1,
          tps_id: 1,
          year_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          dpp_id: 2,
          caleg_id: 2,
          political_party_id: 2,
          tps_id: 2,
          year_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          dpp_id: 3,
          caleg_id: 1,
          political_party_id: 1,
          tps_id: 3,
          year_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          dpp_id: 4,
          caleg_id: 2,
          political_party_id: 2,
          tps_id: 2,
          year_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          dpp_id: 5,
          caleg_id: 1,
          political_party_id: 1,
          tps_id: 3,
          year_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          dpp_id: 6,
          caleg_id: 2,
          political_party_id: 2,
          tps_id: 1,
          year_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          dpp_id: 7,
          caleg_id: 1,
          political_party_id: 1,
          tps_id: 2,
          year_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          dpp_id: 8,
          caleg_id: 3,
          political_party_id: 3,
          tps_id: 2,
          year_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          dpp_id: 9,
          caleg_id: 4,
          political_party_id: 5,
          tps_id: 4,
          year_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          dpp_id: 10,
          caleg_id: 5,
          political_party_id: 6,
          tps_id: 2,
          year_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          dpp_id: 11,
          caleg_id: 6,
          political_party_id: 5,
          tps_id: 2,
          year_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          dpp_id: 12,
          caleg_id: 5,
          political_party_id: 4,
          tps_id: 3,
          year_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          dpp_id: 13,
          caleg_id: 4,
          political_party_id: 3,
          tps_id: 2,
          year_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          dpp_id: 14,
          caleg_id: 3,
          political_party_id: 2,
          tps_id: 2,
          year_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          dpp_id: 15,
          caleg_id: 2,
          political_party_id: 1,
          tps_id: 2,
          year_id: 1,
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
    await queryInterface.bulkDelete("Suaras", null, {});
  },
};
