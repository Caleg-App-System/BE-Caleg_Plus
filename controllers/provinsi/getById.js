const { Provinsi } = require("../../models");

module.exports = {
  getById: async (request, reply) => {
    const { id } = request.body;

    const find = await Provinsi.findOne({ where: { id } });

    if (!find) {
      return reply.code(404).send({
        status: false,
        message: "data tidak ditemukan",
        data: null,
      });
    }

    return reply.code(200).send({
      status: true,
      message: "data berhasil ditemukan",
      data: find,
    });
  },
};
