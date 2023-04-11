const { Dpp } = require("../../models");
const jwt = require("jsonwebtoken");
const { JWT_SECRET_KEY } = process.env;
const { VERIFIED } = require("../../utils/enum");
const { file } = require("googleapis/build/src/apis/file");
const fs = require("fs");
const path = require("path");

module.exports = {
  createNew: async (request, reply) => {
    try {
      const token = request.headers["authorization"].split("Bearer ")[1];
      const user = jwt.verify(token, JWT_SECRET_KEY);

      const {
        no_KK,
        nik,
        name,
        dob_place,
        dob,
        marital_status,
        photo_KK,
        photo_KTP,
        gender,
        address,
        disability,
        keterangan,
        tps_id,
        is_under_age,
        user_id = user.id,
      } = request.body;

      const created = await Dpp.create({
        no_KK,
        nik,
        name,
        dob_place,
        dob,
        marital_status,
        gender,
        address,
        disability,
        keterangan,
        photo_KK,
        photo_KTP,
        tps_id,
        is_new: VERIFIED.TRUE,
        is_under_age,
        user_id,
      });

      return reply.code(200).send({
        status: true,
        message: "data berhasil ditambahkan",
        data: created,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
