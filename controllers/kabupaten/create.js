const { Kabupaten } = require("../../models");

module.exports = {
  create: async (req, res) => {
    try {
      const { name, provinsi_id } = req.body;

      const exist = await Kabupaten.findOne({ where: { name } });

      if (exist) {
        return res.code(409).send({
          status: "error",
          message: "Kabupaten already exist",
        });
      }

      const created = await Kabupaten.create({
        name,
        provinsi_id,
      });

      res.code(201).send({
        status: "success",
        message: "Kabupaten created successfully",
        data: created,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
