const { Caleg } = require("../../models");

module.exports = {
  getAll: async (request, reply) => {
    try {
      const calegs = await Caleg.findAll();

      if (!calegs) {
        return reply.code(404).send({
          status: false,
          message: "caleg not found",
        });
      }

      return reply.code(200).send({
        status: true,
        message: "get all calegs successfully",
        data: calegs,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
