const { User } = require("../../models");
const multer = require("fastify-multer");
const jwt = require("jsonwebtoken");
const { JWT_SECRET_KEY } = process.env;

module.exports = {
  updatePhoto: async (req, res) => {
    try {
      const token = req.headers["authorization"].split("Bearer ")[1];
      const user = jwt.verify(token, JWT_SECRET_KEY);

      const file = req.file;
      if (!file) {
        return res.code(404).send({
          status: false,
          message: "file tidak ditemukan",
          data: null,
        });
      }

      const updated = await User.update(
        {
          photo: file,
        },
        { where: { id: user.id } }
      );

      return res.code(200).send({
        status: true,
        message: "upload foto berhasil",
        data: updated.photo,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
