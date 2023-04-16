const { Dpp, Tps, Desa } = require("../../models");
const { Op } = require("sequelize");

module.exports = {
  filter: async (request, reply) => {
    try {
      const { name, desa_id, rt, rw } = request.query;

      const dpp = await Dpp.findAll({
        where: {
          [Op.and]: [
            {
              name: {
                [Op.like]: `${name}%`,
              },
            },
            {
              desa_id: {
                [Op.like]: `${desa_id}%`,
              },
            },
            {
              rt: {
                [Op.like]: `${rt}%`,
              },
            },
            {
              rw: {
                [Op.like]: `${rw}%`,
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
  filterByName: async (request, reply) => {
    try {
      const { name } = request.query;

      const dpp = await Dpp.findAll({
        where: {
          name: {
            [Op.like]: `${name}%`,
          },
        },
        order: [["name", "ASC"]],
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
