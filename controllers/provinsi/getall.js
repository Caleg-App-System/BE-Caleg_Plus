const { Provinsi } = require("../../models");
const fs = require("fs");
const dataProvinsi = require("../../utils/data/province.json");

module.exports = {
  getAll: async (req, res) => {
    try {
      const arr = [];
      const data = dataProvinsi.forEach((e) => {
        const newObj = {};
        const namaProvinsi = e.name;
        newObj["name"] = namaProvinsi;
        arr.push(newObj);
      });
      return res.code(200).send({
        status: true,
        message: "get all data success",
        data: arr,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
