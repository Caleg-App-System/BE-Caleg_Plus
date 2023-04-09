const { Dpp, Tps, Desa } = require("../../models");
const { Op } = require("sequelize");

module.exports = {
  filter: async (request, reply) => {
    try {
      const { name, nik } = request.query;

      const dpp = await Dpp.findOne({
        where: {
          [Op.and]: [
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
