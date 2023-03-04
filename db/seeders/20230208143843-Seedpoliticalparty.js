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
      "PoliticalParties",
      [
        {
          name: "Demokrat",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Golkar",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "PDI Perjuangan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "PKS",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Gerindra",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "NasDem",
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
    await queryInterface.bulkDelete("PoliticalParties", null, {});
  },
};
