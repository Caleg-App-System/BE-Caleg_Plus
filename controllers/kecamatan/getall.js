const { Kecamatan } = require("../../models");
const adapter = require("../../helpers/adapter");

const api = adapter(
  "https://izazrizqullah.github.io/api-wilayah-indonesia/api"
);

module.exports = {
  getById: async (request, reply) => {
    const { regencyId } = request.params;
    const { data } = await api.get(`/districts/${regencyId}.json`);

    return reply.code(200).send({
      status: true,
      message: "get data successful",
      data: data,
    });
  },
  getAllByTables: async (request, reply) => {
    try {
      const kecamatan = await Kecamatan.findAll();

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
