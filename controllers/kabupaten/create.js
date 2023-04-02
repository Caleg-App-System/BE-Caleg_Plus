const { Kabupaten } = require("../../models");

module.exports = {
  create: async (request, reply) => {
    try {
      const { name, provinsi_id } = request.body;

      const exist = await Kabupaten.findOne({ where: { name } });

      if (exist) {
        return reply.code(409).send({
          status: "error",
          message: "Kabupaten already exist",
        });
      }

      const created = await Kabupaten.create({
        name,
        provinsi_id,
      });

      return reply.code(201).send({
        status: "success",
        message: "Kabupaten created successfully",
        data: created,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
