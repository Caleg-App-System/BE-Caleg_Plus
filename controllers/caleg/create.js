const { Caleg } = require("../../models");

module.exports = {
  create: async (request, reply) => {
    try {
      const created = await Caleg.bulkCreate(req.body);

      return reply.code(201).send({
        status: true,
        message: "caleg created successfully",
        data: created,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
