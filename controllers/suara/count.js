const {
  Suara,
  Caleg,
  PoliticalParty,
  Dpp,
  Tps,
  Desa,
  Kecamatan,
  Kabupaten,
  Provinsi,
} = require("../../models");

module.exports = {
  count: async (request, reply) => {
    try {
      const result = await Suara.count({
        group: ["caleg_id", "tps_id", "political_party_id"],
      });

      return reply.code(200).send({
        status: true,
        message: "count suara successfully",
        data: result,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
