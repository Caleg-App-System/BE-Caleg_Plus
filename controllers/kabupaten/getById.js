const { Kabupaten, Provinsi } = require("../../models");

module.exports = {
  getById: async (request, reply) => {
    try {
      const { id } = request.params;

      const find = await Kabupaten.findOne({
        where: { id },
        include: [
          {
            model: Provinsi,
            as: "provinsi",
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
