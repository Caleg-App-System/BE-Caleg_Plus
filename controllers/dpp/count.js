const { Dpp, Desa, Kecamatan, Kabupaten, Provinsi } = require("../../models");

module.exports = {
  count: async (request, reply) => {
    try {
      const result = await Dpp.count({
        group: ["tps_id"],
      });

      return reply.code(200).send({
        status: true,
        message: "count dpp successfully",
        data: result,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
