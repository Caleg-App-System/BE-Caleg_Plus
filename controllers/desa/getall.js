const { Desa } = require("../../models");
const adapter = require("../../helpers/adapter");

const api = adapter(
  "https://izazrizqullah.github.io/api-wilayah-indonesia/api"
);

module.exports = {
  getById: async (req, res) => {
    const { districtId } = req.params;
    const { data } = await api.get(`/villages/${districtId}.json`);

    return res.code(200).send({
      status: true,
      message: "get data successful",
      data: data,
    });
  },
  getByTables: async (request, reply) => {
    try {
      const desa = await Desa.findAll();

      if (!desa) {
        return reply.code(404).send({
          status: false,
          message: "data not found",
          data: null,
        });
      }
    } catch (err) {
      console.log(err);
    }
  },
};
