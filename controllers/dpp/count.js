const { Dpp, Desa, Kecamatan, Kabupaten, Provinsi } = require("../../models");

module.exports = {
  count: async (req, res) => {
    try {
      const result = await Dpp.count({
        group: ["desa_id"],
      });

      return res.code(200).send({
        status: true,
        message: "count dpp successfully",
        data: result,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
