const { Provinsi } = require("../../models");

module.exports = {
  create: async (req, res) => {
    try {
      const { name } = req.body;

      const exist = await Provinsi.findOne({ where: { name } });

      if (exist) {
        return res.code(409).send({
          status: "error",
          message: "Provinsi already exist",
        });
      }

      const created = await Provinsi.create({
        name,
      });

      res.code(201).send({
        status: "success",
        message: "Provinsi created successfully",
        data: created,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
