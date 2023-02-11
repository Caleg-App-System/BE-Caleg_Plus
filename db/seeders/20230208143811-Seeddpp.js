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
        {
          name: "Sudarso",
          national_id: "1234567890123456",
          dob: "1990-01-01",
          address: "Jl. Duren",
          desa_id: 1,
          religion: "Islam",
          job: "Wiraswasta",
          image_national_card: "https://picsum.photos/202",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Permadi",
          national_id: "1234567890123456",
          dob: "1990-01-01",
          address: "Jl. Kucing",
          desa_id: 2,
          religion: "Kristen",
          job: "Buruh",
          image_national_card: "https://picsum.photos/203",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Agung",
          national_id: "1234567890123456",
          dob: "1990-01-01",
          address: "Jl. Anggur",
          desa_id: 2,
          religion: "Islam",
          job: "Buruh",
          image_national_card: "https://picsum.photos/204",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Andhika",
          national_id: "1234567890123456",
          dob: "1990-01-01",
          address: "Jl. Sungai",
          desa_id: 2,
          religion: "Islam",
          job: "Buruh",
          image_national_card: "https://picsum.photos/205",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Darsini",
          national_id: "1234567890123456",
          dob: "1990-01-01",
          address: "Jl. Kelinci",
          desa_id: 2,
          religion: "Islam",
          job: "Buruh",
          image_national_card: "https://picsum.photos/206",
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
    await queryInterface.bulkDelete("dpps", null, {});
  },
};
