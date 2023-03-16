const multer = require("fastify-multer");

const imagekit = require("./image-kit");

module.exports = {
  image: multer({
    fileFilter: (req, file, callback) => {
      if (
        file.mimetype == "image/png" ||
        file.mimetype == "image/jpg" ||
        file.mimetype == "image/jpeg"
      ) {
        callback(null, true);
      } else {
        const err = new Error(
          "hanya gambar jpg, png dan jpeg yang di izinkan di aplikasi ini"
        );
        callback(err, false);
      }
    },
    onError: (err, next) => {
      next(err);
    },
  }),
};
