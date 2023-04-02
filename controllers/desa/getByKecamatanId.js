const { Desa, Kecamatan } = require("../../models");

module.exports = {
  getById: async (request, reply) => {
    try {
      const { kecamatan_id } = request.params;

      const find = await Desa.findOne({
        where: { kecamatan_id },
        include: [
          {
            model: Kecamatan,
            as: "kecamatan",
            attributes: {
              exclude: ["createdAt", "updatedAt"],
            },
          },
        ],
      });

      if (!find) {
        return reply.code(404).send({
          status: false,
          message: "data tidak ditemukan",
          data: null,
        });
      }

      return reply.code(200).send({
        status: true,
        messsage: "data berhasil ditemukan",
        data: find,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
