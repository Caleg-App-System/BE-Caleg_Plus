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
      "Desas",
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
        {
          name: "Tanggeran",
          kecamatan_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pekaja",
          kecamatan_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Kebokura",
          kecamatan_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ketanda",
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
    await queryInterface.bulkDelete("Desas", null, {});
  },
};
