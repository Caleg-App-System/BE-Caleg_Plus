const { User } = require("../../models");
const jwt = require("jsonwebtoken");
const imagekit = require("../../utils/media-handling/image-kit");
const { JWT_SECRET_KEY } = process.env;

module.exports = {
  updatePhoto: async (req, res) => {
    try {
      const token = req.headers["authorization"].split("Bearer ")[1];
      const user = jwt.verify(token, JWT_SECRET_KEY);
      const file = req.file;
      console.log("ini adalah file", file);
      const fileName = req.file.originalname;

      if (!file) {
        return res.code(400).send({
          status: false,
          message: "file tidak di temukan",
          data: null,
        });
      }

      if (!!/(\.png|\.jpg|\.jpeg)$/i.test(fileName)) {
        return res.code(400).send({
          status: false,
          message:
            "file tidak diizinkan, silakan upload file berekstensi .png .jpg .jpeg",
          data: null,
        });
      }

      const uploadPhoto = await imagekit.upload({
        file: file.buffer,
        fileName: req.file.originalname,
      });

      const updated = await User.update(
        {
          photo: uploadPhoto.url,
        },
        { where: { id: user.id } }
      );

      return res.code(200).send({
        status: true,
        message: "update foto profil berhasil",
        data: updated.photo,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
