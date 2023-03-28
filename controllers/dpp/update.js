const { Dpp } = require("../../models");

module.exports = {
  update: async (request, reply) => {
    const { noKK } = request.body;

    const find = await Dpp.findOne({ where: noKK });

    if (!find) {
      return request.code(404).send({
        status: false,
        message: "data not found",
        data: null,
      });
    }


  },
};

// jamil, sasa, aden, zain