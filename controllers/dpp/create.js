const { Dpp } = require("../../models");

module.exports = {
  create: async (req, res) => {
    try {
      const {
        name,
        national_id,
        dob,
        tps_id,
        address,
        religion,
        job,
        image_national_card,
      } = req.body;

      const user = await Dpp.findOne({ where: { name } });

      if (user) {
        return res.code(409).send({
          status: false,
          message: "national id already exist!",
          data: null,
        });
      }

      const created = await Dpp.create({
        name,
        national_id,
        dob,
        tps_id,
        address,
        religion,
        job,
        image_national_card,
      });

      return res.code(201).send({
        status: true,
        message: "create dpp succesfully",
        data: created,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
