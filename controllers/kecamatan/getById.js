const { Kecamatan, Kabupaten } = require("../../models");

module.exports = {
  getById: async (request, reply) => {
    try {
      const { id } = request.params;

      const find = await Kecamatan.findOne({
        where: { id },
        include: [
          {
            model: Kabupaten,
            as: "kabupaten",
            attributes: { exclude: ["createdAt", "updatedAt"] },
          },
        ],
      });

      if (!find) {
        return reply.code(404).send({
          status: false,
          message: "data tidak di temukan",
          data: null,
        });
      }

      return reply.code(200).send({
        status: true,
        message: "data berhasil di temukan",
        data: find,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
