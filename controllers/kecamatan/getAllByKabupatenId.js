const { Kecamatan, Kabupaten } = require("../../models");

module.exports = {
  getAllByTables: async (request, reply) => {
    try {
      const { kabupaten_id } = request.params;
      const kecamatan = await Kecamatan.findAll({
        where: { kabupaten_id },
        include: [
          {
            model: Kabupaten,
            as: "kabupaten",
            attributes: {
              exclude: ["createdAt", "updatedAt"],
            },
          },
        ],
      });

      if (!kecamatan) {
        return reply.code(404).send({
          status: false,
          message: "data not found",
          data: null,
        });
      }

      return reply.code(200).send({
        status: true,
        message: "get data successful",
        data: kecamatan,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
