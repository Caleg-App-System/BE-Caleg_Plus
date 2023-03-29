const { Dpp, Tps, Desa } = require("../../models");

module.exports = {
  getById: async (request, reply) => {
    try {
      const { id } = request.params;

      const dpp = await Dpp.findOne({
        include: [
          {
            model: Tps,
            as: "tps",
            include: [
              {
                model: Desa,
                as: "desa",
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
        where: { id },
      });

      if (!dpp) {
        return reply.code(404).send({
          status: false,
          message: "data not found",
          data: null,
        });
      }

      return reply.code(200).send({
        status: true,
        message: "data berhasil di muat",
        data: dpp,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
