const { Provinsi } = require("../../models");
const fs = require("fs");
const dataProvinsi = require("../../utils/data/province.json");

module.exports = {
  create: async (request, reply) => {
    try {
      const arr = [];
      const data = dataProvinsi.forEach(async (e) => {
        const newObj = {};

        const provinsiName = e.name;
        newObj["nama_provinsi"] = provinsiName;

        arr.push(newObj);
      });

      const result = arr.forEach((e) => {
        Provinsi.create({
          name: e.nama_provinsi,
        });
      });

      return reply.code(201).send({
        status: true,
        message: "create provinsi successful",
        data: data,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
