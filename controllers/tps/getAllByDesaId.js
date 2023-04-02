const { Tps } = require("../../models");

module.exports = {
  getAll: async (request, reply) => {
    try {
      const { desa_id } = request.params;
      const tps = await Tps.findAll({
        include: ["desa"],
        where: { desa_id },
      });

      if (!tps) {
        return reply.code(404).send({
          status: false,
          message: "tps tidak ditemukan",
          data: null,
        });
      }

      return reply.code(200).send({
        status: true,
        message: "berhasil mengambil data",
        data: tps,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
