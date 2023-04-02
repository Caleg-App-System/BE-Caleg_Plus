const { Kabupaten, Provinsi } = require("../../models");

module.exports = {
  getAllByTables: async (request, reply) => {
    try {
      const { provinsi_id } = request.params;
      const kabupaten = await Kabupaten.findAll({
        where: { provinsi_id },
        include: [
          {
            model: Provinsi,
            as: "provinsi",
            attributes: {
              exclude: ["createdAt", "updatedAt"],
            },
          },
        ],
      });
      if (!kabupaten) {
        return reply.code(404).send({
          status: false,
          message: "data not found",
          data: null,
        });
      }

      return reply.code(200).send({
        status: true,
        message: "get data successful",
        data: kabupaten,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
