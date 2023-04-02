const { Provinsi } = require("../../models");
const adapter = require("../../helpers/adapter");

const api = adapter(
  "https://izazrizqullah.github.io/api-wilayah-indonesia/api/"
);

module.exports = {
  getAll: async (request, reply) => {
    try {
      const { data } = await api.get("/provinces.json");
      return res.code(200).send({
        status: true,
        message: "get all data success",
        data: data,
      });
    } catch (err) {
      console.log(err);
    }
  },
  getAllByTables: async (request, reply) => {
    try {
      const province = await Provinsi.findAll();

      if (!province) {
        return reply.code(404).send({
          status: false,
          message: "data not found",
          data: null,
        });
      }

      return reply.code(200).send({
        status: true,
        message: "get data successful",
        data: province,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
