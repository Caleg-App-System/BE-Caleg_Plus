const { Caleg } = require("../../models");

module.exports = {
  getAll: async (req, res) => {
    try {
      const calegs = await Caleg.findAll();

      if (!calegs) {
        return res.code(404).send({
          status: false,
          message: "caleg not found",
        });
      }

      return res.code(200).send({
        status: true,
        message: "get all calegs successfully",
        data: calegs,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
