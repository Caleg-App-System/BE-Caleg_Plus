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
      "Kecamatans",
      [
        {
          name: "Banyumas",
          kabupaten_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Kalibagor",
          kabupaten_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tambak",
          kabupaten_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Somagede",
          kabupaten_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sumpiuh",
          kabupaten_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Kemranjen",
          kabupaten_id: 1,
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
    await queryInterface.bulkDelete("Kecamatans", null, {});
  },
};
