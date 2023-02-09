const { Desa } = require("../../models");

module.exports = {
  create: async (req, res) => {
    try {
      const { name, kecamatan_id } = req.body;

      const exist = await Desa.findOne({ where: { name } });

      if (exist) {
        return res.code(409).send({
          status: true,
          message: "desa already exist",
        });
      }

      const created = await Desa.create({
        name,
        kecamatan_id,
      });

      return res.code(201).send({
        status: true,
        message: "desa created successfully",
        data: created,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
