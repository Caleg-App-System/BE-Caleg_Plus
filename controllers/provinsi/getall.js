const { Provinsi } = require("../../models");
const adapter = require("../../helpers/adapter");

const api = adapter(
  "https://izazrizqullah.github.io/api-wilayah-indonesia/api/"
);

module.exports = {
  getAll: async (req, res) => {
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
};
