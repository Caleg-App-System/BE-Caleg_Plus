const { Dpp } = require("../../models");

module.exports = {
  getAll: async (request, reply) => {
    const find = await Dpp.findAll();

    if (!find) {
      return reply.code(404).send({
        status: false,
        message: "data not found",
        data: null,
      });
    }

    reply.code(200).send({
      status: true,
      message: "berhasil mengambil data",
      data: find,
    });
  },
};
