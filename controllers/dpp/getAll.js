const { Dpp, Tps, Desa, Kecamatan } = require("../../models");

module.exports = {
  getAll: async (request, reply) => {
    try {
      const find = await Dpp.findAll({
        include: [
          {
            model: Tps,
            as: "tps",
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
            attributes: {
              exclude: ["createdAt", "updatedAt"],
            },
          },
        ],
      });

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
    } catch (err) {
      console.log(err);
    }
  },
};
