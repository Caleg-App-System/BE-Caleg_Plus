const { Dpp, Tps, Desa } = require("../../models");
const { Op } = require("sequelize");

module.exports = {
  filter: async (request, reply) => {
    try {
      const { name, nik, no_KK } = request.query;

      const dpp = await Dpp.findOne({
        where: {
          [Op.or]: [
            {
              no_KK: {
                [Op.like]: `%${no_KK}%`,
              },
            },
            {
              nik: {
                [Op.like]: `%${nik}%`,
              },
            },
            {
              name: {
                [Op.like]: `%${name}%`,
              },
            },
          ],
        },
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
      });

      return reply.code(200).send({
        status: true,
        message: "success",
        data: dpp,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
