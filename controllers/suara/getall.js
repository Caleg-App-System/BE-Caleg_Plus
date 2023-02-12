const {
  Suara,
  Caleg,
  PoliticalParty,
  Dpp,
  Tps,
  Desa,
  Kecamatan,
  Kabupaten,
  Provinsi,
} = require("../../models");

const sequelize = require("sequelize");

module.exports = {
  getAll: async (req, res) => {
    try {
      const result = await Suara.findAll({
        include: [
          {
            model: Caleg,
            as: "caleg",
            include: ["political_party"],
            attributes: {
              exclude: ["createdAt", "updatedAt"],
            },
          },
          {
            model: PoliticalParty,
            as: "political_party",
            attributes: {
              exclude: ["createdAt", "updatedAt"],
            },
          },
          {
            model: Dpp,
            as: "dpp",
            attributes: {
              exclude: ["createdAt", "updatedAt"],
            },
          },
          {
            model: Tps,
            as: "tps",
            include: [
              {
                model: Desa,
                as: "desa",
                include: [
                  {
                    model: Kecamatan,
                    as: "kecamatan",
                    include: [
                      {
                        model: Kabupaten,
                        as: "kabupaten",
                        include: [
                          {
                            model: Provinsi,
                            as: "provinsi",
                            attributes: {
                              exclude: ["createdAt", "updatedAt"],
                            },
                          },
                        ],
                        attributes: {
                          exclude: ["createdAt", "updatedAt"],
                        },
                      },
                    ],
                    attributes: {
                      exclude: ["createdAt", "updatedAt"],
                    },
                  },
                ],
                attributes: {
                  exclude: ["createdAt", "updatedAt"],
                },
              },
            ],
            attributes: {
              exclude: ["createdAt", "updatedAt"],
            },
          },
        ],
      });

      const countSuara = await Suara.count({
        group: ["tps_id"],
      });

      const countDpp = await Dpp.count({
        group: ["desa_id"],
      });

      // Definisi new array
      // Loop
      // definisi new object

      let arr = [];

      // for (const countItem of count) {
      //   let newObj = {};

      //   // DB interact
      //   let kecamatan
      //   let desa
      //   let tps
      //   let dpt
      //   let name
      //   let political_party
      //   let totalvote

      //   newObj["village"] = village;

      //   arr.push(newObj);
      // }

      const suaraResult = result.map((e) => {
        let newObj = {};

        // Sorting
        let provinsi = e.tps.desa.kecamatan.kabupaten.provinsi.name;
        let kabupaten = e.tps.desa.kecamatan.kabupaten.name;
        let kecamatan = e.tps.desa.kecamatan.name;
        let desa = e.tps.desa.name;
        let tps = e.tps.name;

        // Define the object
        newObj["provinsi"] = provinsi;
        newObj["kabupaten"] = kabupaten;
        newObj["kecamatan"] = kecamatan;
        newObj["desa"] = desa;
        newObj["tps"] = tps;

        return arr.push(newObj);

        // return e;
      });

      const dppResult = countDpp.map((e) => {
        for (const i = 0; i <= arr.length; i++) {
          console.log(e);
          return (arr[i]["Total DPT"] = e.count);
        }
      });

      const finalResult = countSuara.map((e) => {
        for (const i = 0; i <= arr.length; i++) {
          return (arr[i]["Total Vote"] = e.count);
        }
      });

      console.log(arr);

      return res.code(200).send({
        status: true,
        message: "data retrieved",
        data: {
          countDpp,
        },
      });
    } catch (err) {
      console.log(err);
    }
  },
};
