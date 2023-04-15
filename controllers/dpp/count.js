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
      const result = await Dpp.count({});

      return reply.code(200).send({
        status: true,
        message: "count dpp successfully",
        data: result,
      });
    } catch (err) {
      console.log(err);
    }
  },
  countByTPSId: async (request, reply) => {
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
  countByIsCheck: async (request, reply) => {
    try {
      const result = await Dpp.count({
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
  countGroupByTPS: async (request, reply) => {
    try {
      const result = await Dpp.count({ group: ["tps_id"] });

      if (!result) {
        return reply.code(404).send({
          status: false,
          message: "data not found",
          data: null,
        });
      }

      return reply.code(200).send({
        status: true,
        message: "count berhasil",
        data: result,
      });
    } catch (err) {
      console.log(err);
    }
  },
  countByUserId: async (request, reply) => {
    const { user_id } = request.params;

    const result = await Dpp.count({ group: ["user_id"], where: { user_id } });

    if (!result) {
      return reply.code(404).send({
        status: false,
        message: "data not found",
        data: null,
      });
    }

    return reply.code(200).send({
      status: true,
      message: "count data berhasil",
      data: result,
    });
  },
};
