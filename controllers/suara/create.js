const { Suara } = require("../../models");

module.exports = {
  create: async (request, reply) => {
    try {
      const created = await Suara.bulkCreate(req.body);

      return reply.code(201).send({
        status: true,
        message: "data created",
        data: created,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
