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
};
