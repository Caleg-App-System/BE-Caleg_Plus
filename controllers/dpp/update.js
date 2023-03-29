const { Dpp } = require("../../models");
const { VERIFIED } = require("../../utils/enum");

module.exports = {
  update: async (request, reply) => {
    try {
      const { noKK, nik } = request.body;

      const findKK = await Dpp.findOne({ where: noKK });

      const findNik = await Dpp.findOne({ where: noKK });

      if (!findKK && !findNik) {
        return request.code(404).send({
          status: false,
          message: "data not found",
          data: null,
        });
      }

      const updated = await Dpp.update({
        is_check: VERIFIED.TRUE,
        is_new: VERIFIED.FALSE,
        is_under_age: VERIFIED.FALSE,
      });
    } catch (err) {
      console.log(err);
    }
  },
};

// jamil, sasa, aden, zain
