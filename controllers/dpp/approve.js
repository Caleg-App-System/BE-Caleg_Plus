const { Dpp } = require("../../models");
const { VERIFIED } = require("../../utils/enum.js");

module.exports = {
  approve: async (request, reply) => {
    try {
      const { id } = request.params;

      const find = await Dpp.findOne({ where: { id } });

      if (!find) {
        return reply.code(404).send({
          status: false,
          message: "data not found",
          data: null,
        });
      }

      const updated = await Dpp.update(
        {
          is_check: VERIFIED.TRUE,
          is_acc: VERIFIED.TRUE,
        },
        {
          where: { id },
        }
      );

      reply.code(200).send({
        status: true,
        message: "Data DPP berhasil di approve",
        data: updated,
      });
    } catch (err) {
      console.log(err);
    }
  },
};