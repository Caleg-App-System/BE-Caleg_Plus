const { Kabupaten, Provinsi } = require("../../models");
const dataKabupaten = require("../../utils/data/kabupaten.json");

module.exports = {
  getAll: async (req, res) => {
    try {
      // const kabupaten = await Kabupaten.findAll({
      //   include: [
      //     {
      //       model: Provinsi,
      //       as: "provinsi",
      //       attributes: {
      //         exclude: ["createdAt", "updatedAt"],
      //       },
      //     },
      //   ],
      //   attributes: {
      //     exclude: ["createdAt", "updatedAt"],
      //   },
      // });
      // res.send({
      //   status: "success",
      //   message: "Kabupaten retrieved successfully",
      //   data: kabupaten,
      // });
      const arr = [];
      const data = dataKabupaten.forEach((e) => {
        const newObj = {};
        const nameKabupaten = e.name;
        newObj["name"] = nameKabupaten;
        arr.push(newObj);
      });

      return res.code(200).send({
        status: true,
        message: "get all data successfull",
        data: arr,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
