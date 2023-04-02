const { Tps, Desa, Kecamatan } = require("../../models/");

module.exports = {
  getById: async (request, reply) => {
    try {
      const { desa_id } = request.params;

      const find = await Tps.findOne({
        where: { desa_id },
        include: [
          {
            model: Desa,
            as: "desa",
            include: [
              {
                model: Kecamatan,
                as: "kecamatan",
                attributes: {
                  exclude: ["createdAt", "updatedAt"],
                },
              },
            ],
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
