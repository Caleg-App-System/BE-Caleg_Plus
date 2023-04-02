const { Desa, Kecamatan } = require("../../models");

module.exports = {
  getByTables: async (request, reply) => {
    try {
      const { kecamatan_id } = request.params;
      const desa = await Desa.findAll({
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

      if (!desa) {
        return reply.code(404).send({
          status: false,
          message: "data not found",
          data: null,
        });
      }

      return reply.code(200).send({
        status: true,
        message: "get data successful",
        data: desa,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
