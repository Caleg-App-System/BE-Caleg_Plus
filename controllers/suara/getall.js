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
const { Op } = require("sequelize");

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
        group: ["tps_id"],
      });

      const countSuara = await Suara.count({
        group: ["tps_id"],
      });

      const countDpp = await Dpp.count({
        group: ["tps_id"],
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
        let caleg = e.caleg.name;
        let partai = e.political_party.name;

        // Define the object
        newObj["provinsi"] = provinsi;
        newObj["kabupaten"] = kabupaten;
        newObj["kecamatan"] = kecamatan;
        newObj["desa"] = desa;
        newObj["tps"] = tps;
        newObj["caleg"] = caleg;
        newObj["partai"] = partai;

        countSuara.map((suara) => {
          if (suara.tps_id == e.tps.id) {
            newObj["TotalVote"] = suara.count;
          }
        });

        countDpp.map((dpt) => {
          if (dpt.tps_id == e.tps_id) {
            newObj["TotalDpt"] = dpt.count;
          }
        });

        return arr.push(newObj);

        // return e;
      });

      return res.code(200).send({
        status: true,
        message: "data retrieved",
        data: {
          arr,
        },
      });
    } catch (err) {
      console.log(err);
    }
  },
};
