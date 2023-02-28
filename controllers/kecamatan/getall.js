const adapter = require("../../helpers/adapter");

const api = adapter(
  "https://izazrizqullah.github.io/api-wilayah-indonesia/api"
);

module.exports = {
  getById: async (req, res) => {
    const { regencyId } = req.params;
    const { data } = await api.get(`/districts/${regencyId}.json`);

    return res.code(200).send({
      status: true,
      message: "get data successful",
      data: data,
    });
  },
};
