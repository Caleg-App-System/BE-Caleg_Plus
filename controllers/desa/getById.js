const { Desa } = require("../../models");

module.exports = {
  getById: async (request, reply) => {
    try {
      const { id } = request.body;

      const find = await Desa.findOne({ where: { id } });

      if (!user) {
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
