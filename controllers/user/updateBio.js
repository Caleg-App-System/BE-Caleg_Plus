const { User } = require("../../models");
const jwt = require("jsonwebtoken");
const { JWT_SECRET_KEY } = process.env;

module.exports = {
  updateBio: async (req, res) => {
    try {
      const token = req.headers["authorization"].split("Bearer ")[1];
      const user = jwt.verify(token, JWT_SECRET_KEY);

      const { name, phone, address } = req.body;

      const updated = await User.update(
        {
          name,
          phone,
          address,
        },
        { where: { id: user.id } }
      );

      return res.code(200).send({
        status: true,
        message: "update data success!",
        data: updated,
      });
    } catch (err) {
      console.log(err);
    }
  },
  updateWorkingArea: async (req, res) => {
    const { id } = req.params;
    const { working_area } = req.body;

    const user = await User.findOne({ where: { id } });

    if (!user) {
      return res.code(404).send({
        status: false,
        message: "data tidak ditemukan",
        data: null,
      });
    }

    const updated = await User.update({ working_area }, { where: { id } });

    return res.code(200).send({
      status: true,
      message: "berhasil menambahkan area kerja",
      data: updated,
    });
  },
};
