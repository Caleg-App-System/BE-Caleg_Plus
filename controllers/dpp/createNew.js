const { Dpp } = require("../../models");
const jwt = require("jsonwebtoken");
const { JWT_SECRET_KEY } = process.env;
const { VERIFIED } = require("../../utils/enum");
const { file } = require("googleapis/build/src/apis/file");
const fs = require("fs");
const path = require("path");
const image2Base64 = require("image-to-base64");

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
        rt,
        rw,
        phone,
        usia,
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
        rt,
        rw,
        phone,
        usia,
        keterangan,
        photo_KK,
        photo_KTP,
        tps_id: 99999,
        is_new: VERIFIED.TRUE,
        is_under_age,
        is_acc: VERIFIED.FALSE,
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
  createNewVersion: async (request, reply) => {
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
        gender,
        address,
        disability,
        keterangan,
        rt,
        rw,
        phone,
        usia,
        is_under_age,
        user_id = user.id,
      } = request.body;

      const photo_KK = request.files["photo_KK"];
      const photo_KTP = request.files["photo_KTP"];

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
        rt,
        rw,
        phone,
        usia,
        keterangan,
        photo_KK: convertPhotoKK,
        photo_KTP: convertPhotoKTP,
        tps_id: 99999,
        is_new: VERIFIED.TRUE,
        is_under_age,
        is_acc: VERIFIED.FALSE,
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
