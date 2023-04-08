const {
  Dpp,
  Desa,
  Kecamatan,
  Kabupaten,
  Provinsi,
  Tps,
} = require("../../models");
const sequelize = require("sequelize");
const { VERIFIED } = require("../../utils/enum");

module.exports = {
  countAll: async (request, reply) => {
    try {
      const result = await Dpp.count({
        group: ["tps_id"],
      });

      return reply.code(200).send({
        status: true,
        message: "count dpp successfully",
        data: result,
      });
    } catch (err) {
      console.log(err);
    }
  },
  countById: async (request, reply) => {
    try {
      const { tps_id } = request.params;
      const result = await Dpp.count({
        group: ["tps_id"],
        where: { tps_id },
      });

      return reply.code(200).send({
        status: true,
        message: "count dpt successfully",
        data: result,
      });
    } catch (err) {
      console.log(err);
    }
  },
  testCount: async (request, reply) => {
    try {
      const countByDesa = await Dpp.findAll({
        attributes: [
          [sequelize.literal("`tps->Desa`.`id`"), "desa_id"],
          [sequelize.fn("COUNT", sequelize.col("Dpp.id")), "count"],
        ],
        include: [
          {
            model: Tps,
            as: "tps",
            attributes: [],
            include: [
              {
                model: Desa,
                as: "desa",
                attributes: [],
              },
            ],
          },
        ],
        group: ["tps -> desa.id"],
      });

      return reply.code(200).send({
        status: true,
        message: "berhasil menghitung data",
        data: countByDesa,
      });
    } catch (err) {
      console.log(err);
    }
  },
  countByIsCheck: async (request, reply) => {
    try {
      const { tps_id } = request.params;
      const result = await Dpp.count({
        group: ["tps_id"],
        where: { is_check: VERIFIED.TRUE },
      });

      return reply.code(200).send({
        status: true,
        message: "count dpp successfully",
        data: result,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
