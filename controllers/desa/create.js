const { Desa } = require("../../models");

module.exports = {
  create: async (request, reply) => {
    try {
      const { name, kecamatan_id } = request.body;

      const exist = await Desa.findOne({ where: { name } });

      if (exist) {
        return reply.code(409).send({
          status: true,
          message: "desa already exist",
        });
      }

      const created = await Desa.create({
        name,
        kecamatan_id,
      });

      return reply.code(201).send({
        status: true,
        message: "desa created successfully",
        data: created,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
