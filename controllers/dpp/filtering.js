const { Dpp } = require("../../models");
const { Op } = require("sequelize");

module.exports = {
  filter: async (req, res) => {
    try {
      const { name, tps_id, caleg_id } = req.params;

      const dpp = await Dpp.findAll({
        where: {
          [Op.or]: [
            {
              name: {
                [Op.like]: `%${name}%`,
              },
            },
            {
              tps_id: {
                [Op.like]: `%${tps_id}%`,
              },
            },
            {
              caleg_id: {
                [Op.like]: `%${caleg_id}%`,
              },
            },
          ],
          include: [
            {
              model: Tps,
              as: "tps",
              attributes: {
                exclude: ["createdAt", "updatedAt"],
              },
            },
            {
              model: Caleg,
              as: "caleg",
              attributes: {
                exclude: ["createdAt", "updatedAt"],
              },
            },
          ],
        },
      });

      return res.code(200).send({
        status: true,
        message: "success",
        data: dpp,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
