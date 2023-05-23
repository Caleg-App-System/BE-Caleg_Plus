const { Dpp } = require("../../models");
const { VERIFIED } = require("../../utils/enum");
const jwt = require("jsonwebtoken");
const { JWT_SECRET_KEY } = process.env;
const image2Base64 = require("image-to-base64");

module.exports = {
  update: async (request, reply) => {
    try {
      const token = request.headers["authorization"].split("Bearer ")[1];
      const user = jwt.verify(token, JWT_SECRET_KEY);

      const { name, usia } = request.query;

      const { no_KK, nik, phone, photo_KTP, photo_KK, keterangan } =
        request.body;

      // const findNik = await Dpp.findOne({ where: { tps_id } });

      const findName = await Dpp.findOne({ where: { name } });

      if (!findName) {
        return request.code(404).send({
          status: false,
          message: "data not found",
          data: null,
        });
      }

      const updated = await Dpp.update(
        {
          no_KK,
          nik,
          phone,
          keterangan,
          photo_KK,
          photo_KTP,
          is_check: VERIFIED.TRUE,
          is_new: VERIFIED.FALSE,
          is_under_age: VERIFIED.FALSE,
          user_id: user.id,
        },
        { where: { name, usia } }
      );

      return reply.code(200).send({
        status: true,
        message: "berhasil update dpt",
        data: updated,
      });
    } catch (err) {
      console.log(err);
    }
  },
  updateNewVersion: async (request, reply) => {
    try {
      const token = request.headers["authorization"].split("Bearer ")[1];
      const user = jwt.verify(token, JWT_SECRET_KEY);

      const { name, usia } = request.query;

      const { no_KK, nik, phone, keterangan } = request.body;

      const photo_KTP = request.files["photo_KTP"];
      console.log(photo_KTP);
      const photo_KK = request.files["photo_KK"];

      const convertPhotoKK = await image2Base64(`${photo_KK[0].path}`)
        .then((response) => {
          return response;
        })
        .catch((err) => {
          console.log(err);
        });

      const convertPhotoKTP = await image2Base64(`${photo_KTP[0].path}`)
        .then((response) => {
          return response;
        })
        .catch((err) => {
          console.log(err);
        });

      const findName = await Dpp.findOne({ where: { name } });

      if (!findName) {
        return request.code(404).send({
          status: false,
          message: "data not found",
          data: null,
        });
      }

      const updated = await Dpp.update(
        {
          no_KK,
          nik,
          phone,
          keterangan,
          photo_KK: convertPhotoKK,
          photo_KTP: convertPhotoKTP,
          is_check: VERIFIED.TRUE,
          is_new: VERIFIED.FALSE,
          is_under_age: VERIFIED.FALSE,
          user_id: user.id,
        },
        { where: { name, usia } }
      );

      return reply.code(200).send({
        status: true,
        message: "berhasil update dpt",
        data: updated,
      });
    } catch (err) {
      console.log(err);
    }
  },
  deleteByAdmin: async (request, reply) => {
    try {
      const { id } = request.params;

      const dpp = await Dpp.findOne({ where: { id } });

      if (!dpp) {
        return reply.code(404).send({
          status: false,
          message: "data not found",
          data: null,
        });
      }

      const deleteDpp = await Dpp.update(
        {
          photo_KTP: null,
          is_check: null,
          is_new: null,
          is_under_age: null,
          user_id: null,
        },
        { where: { id } }
      );

      return reply.code(200).send({
        status: true,
        message: `berhasil menghapus data potensial ${dpp.name}`,
        data: deleteDpp,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
