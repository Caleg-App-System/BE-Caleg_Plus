const { Dpp } = require("../../models");

module.exports = {
  deleteNew: async (request, reply) => {
    try {
      const { id } = request.params;

      const dpp = await Dpp.destroy({ where: { id } });

      return reply.code(200).send({
        status: true,
        message: `DPT Baru berhasil dihapus`,
        data: dpp,
      });
    } catch (err) {
      console.log(err);
    }
  },
};