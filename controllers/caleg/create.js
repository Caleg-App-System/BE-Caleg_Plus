const { Caleg } = require("../../models");

module.exports = {
  create: async (req, res) => {
    const created = await Caleg.bulkCreate(req.body);

    res.code(201).send({
      status: true,
      message: "caleg created successfully",
      data: created,
    });
  },
};
