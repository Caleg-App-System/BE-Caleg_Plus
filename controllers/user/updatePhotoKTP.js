const { User } = require("../../models");
const jwt = require("jsonwebtoken");
const { JWT_SECRET_KEY } = process.env;

module.exports = {
  updatePhotoKTP: async (req, res) => {
    try {
      const token = req.headers["authorization"].split("Bearer ")[1];
      const user = jwt.verify(token, JWT_SECRET_KEY);
      const file = req.file;

      if (!file) {
        return res.code(400).send({
          status: false,
          message: "file not found!",
          data: null,
        });
      }

      const updated = await User.update(
        {
          photo_ktp: file,
        },
        { where: { id: user.id } }
      );

      return res.code(200).send({
        status: true,
        message: "update photo success!",
        data: updated.photo,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
