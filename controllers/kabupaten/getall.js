const { Kabupaten, Provinsi } = require("../../models");
const adapter = require("../../helpers/adapter");

const api = adapter(
  "https://izazrizqullah.github.io/api-wilayah-indonesia/api/"
);

module.exports = {
  getAll: async (request, reply) => {
    try {
      const { provinceId } = request.params;
      const { data } = await api.get(`/regencies/${provinceId}.json`);

      return reply.code(200).send({
        status: true,
        message: "get all data successfull",
        data: data,
      });
    } catch (err) {
      console.log(err);
    }
  },
  getAllByTables: async (request, reply) => {
    try {
      const kabupaten = await Kabupaten.findAll();
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
