const { Caleg } = require("../../models");

module.exports = {
  create: async (req, res) => {
    const { name, position, political_party_id } = req.body;

    const exist = await Caleg.findOne({ where: { name } });

    if (exist) {
      return res.code(409).send({
        status: true,
        message: "caleg already exist",
      });
    }

    const created = await Caleg.bulkcreate({
      name,
      position,
      political_party_id,
    });

    res.code(201).send({
      status: true,
      message: "caleg created successfully",
      data: created,
    });
  },
};
