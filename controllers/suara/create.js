const { Suara } = require("../../models");

module.exports = {
  create: async (req, res) => {
    try {
      const created = await Suara.bulkCreate(req.body);

      return res.code(201).send({
        status: true,
        message: "data created",
        data: created,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
