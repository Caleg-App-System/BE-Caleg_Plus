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

      const count = await Suara.count({
        group: ["caleg_id", "tps_id", "political_party_id"],
      });

      return res.code(200).send({
        status: true,
        message: "data retrieved",
        data: {
          result,
          count,
        },
      });
    } catch (err) {
      console.log(err);
    }
  },
};
