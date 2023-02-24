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
      "Calegs",
      [
        {
          name: "Bambang S.H",
          position: "DPRD",
          political_party_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Jumadi S.H",
          position: "DPRD",
          political_party_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sukardi S.H",
          position: "DPRD",
          political_party_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Lukman S.H",
          position: "DPRD",
          political_party_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Zainal S.H",
          position: "DPRD",
          political_party_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Hari S.H",
          position: "DPRD",
          political_party_id: 6,
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
    await queryInterface.bulkDelete("Calegs", null, {});
  },
};
