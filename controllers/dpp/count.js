const { Dpp } = require("../../models");

module.exports = {
  count: async (req, res) => {
    try {
      const count = await Dpp.count({ group: ["tps_id"] });

      return res.code(200).send({
        status: true,
        message: "count dpp successfully",
        data: count,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
