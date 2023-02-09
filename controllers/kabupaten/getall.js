const { Kabupaten, Provinsi } = require("../../models");

module.exports = {
  getAll: async (req, res) => {
    try {
      const kabupaten = await Kabupaten.findAll({
        include: [
          {
            model: Provinsi,
            as: "provinsi",
            attributes: {
              exclude: ["createdAt", "updatedAt"],
            },
          },
        ],
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });

      res.send({
        status: "success",
        message: "Kabupaten retrieved successfully",
        data: kabupaten,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
