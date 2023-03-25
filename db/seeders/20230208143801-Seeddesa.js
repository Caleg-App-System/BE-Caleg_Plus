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
          name: "Binangun",
          kecamatan_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Dawuhan",
          kecamatan_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Danaraja",
          kecamatan_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Kalisube",
          kecamatan_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Karangrau",
          kecamatan_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Kedunggede",
          kecamatan_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Kedunguter",
          kecamatan_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Kejawar",
          kecamatan_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Papringan",
          kecamatan_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pasinggangan",
          kecamatan_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pekunden",
          kecamatan_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sudagaran",
          kecamatan_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Kalibagor",
          kecamatan_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Kalicupak Kidul",
          kecamatan_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Kalicupak Lor",
          kecamatan_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Kaliori",
          kecamatan_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Kalisogra Wetan",
          kecamatan_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Karangdadap",
          kecamatan_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pajerukan",
          kecamatan_id: 2,
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
          name: "Petir",
          kecamatan_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Srowot",
          kecamatan_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Suro",
          kecamatan_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Wlahar Wetan",
          kecamatan_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Alas Malang",
          kecamatan_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Grujugan",
          kecamatan_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Karangjati",
          kecamatan_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Karanggintung",
          kecamatan_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Karangjati",
          kecamatan_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Karangsalam",
          kecamatan_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Kebarongan",
          kecamatan_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Kecila",
          kecamatan_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Kedungpring",
          kecamatan_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Nusamangir",
          kecamatan_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Petarangan",
          kecamatan_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sibalung",
          kecamatan_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sibrama",
          kecamatan_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sidamulya",
          kecamatan_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sirau",
          kecamatan_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Kanding",
          kecamatan_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Kemawi",
          kecamatan_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Klinting",
          kecamatan_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Piasa Kulon",
          kecamatan_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Plana",
          kecamatan_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sokawera",
          kecamatan_id: 4,
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
          name: "Somakaton",
          kecamatan_id: 4,
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
          name: "Banjarpanepen",
          kecamatan_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bogangin",
          kecamatan_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Karanggedang",
          kecamatan_id: 5,
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
          name: "Kemiri",
          kecamatan_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ketanda",
          kecamatan_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Kradenan",
          kecamatan_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Kuntili",
          kecamatan_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Lebeng",
          kecamatan_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Nusadadi",
          kecamatan_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pandak",
          kecamatan_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Selandaka",
          kecamatan_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Selanegara",
          kecamatan_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sumpiuh",
          kecamatan_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Buniayu",
          kecamatan_id: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Gebangsari",
          kecamatan_id: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Gumelar Kidul",
          kecamatan_id: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Gumelar Lor",
          kecamatan_id: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Kamulyan",
          kecamatan_id: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Karangpetir",
          kecamatan_id: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Karangpucung",
          kecamatan_id: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pesantren",
          kecamatan_id: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Plangkapan",
          kecamatan_id: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Prembun",
          kecamatan_id: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Purwodadi",
          kecamatan_id: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Watuagung",
          kecamatan_id: 6,
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
