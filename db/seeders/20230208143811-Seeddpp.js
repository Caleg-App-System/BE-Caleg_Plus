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
      "dpps",
      [
        {
          name: "Sukijan",
          national_id: "1234567890123456",
          dob: "1990-01-01",
          address: "Jl. Pramuka",
          desa_id: 1,
          religion: "Islam",
          job: "PNS",
          image_national_card: "https://picsum.photos/200",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Darsono",
          national_id: "1234567890123456",
          dob: "1990-01-01",
          address: "Jl. Kelinci",
          desa_id: 2,
          religion: "Islam",
          job: "Buruh",
          image_national_card: "https://picsum.photos/201",
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
