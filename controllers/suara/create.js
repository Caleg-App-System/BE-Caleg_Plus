const { Suara } = require("../../models");

module.exports = {
  create: async (req, res) => {
    try {
      const { dpp_id, caleg_id, political_party_id, tps_id, year } = req.body;

      const exist = await Suara.findOne({ where: { dpp_id } });

      if (exist) {
        return res.code(400).send({
          status: false,
          message: "data already exist",
          data: null,
        });
      }

      const created = await Suara.bulkcreate({
        dpp_id,
        caleg_id,
        political_party_id,
        tps_id,
        year,
      });

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
