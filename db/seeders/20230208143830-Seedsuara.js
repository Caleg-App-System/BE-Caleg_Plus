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
      "suaras",
      [
        {
          dpp_id: 1,
          caleg_id: 1,
          political_party_id: 1,
          tps_id: 1,
          year: 2024,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          dpp_id: 2,
          caleg_id: 2,
          political_party_id: 2,
          tps_id: 2,
          year: 2024,
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
  },
};
