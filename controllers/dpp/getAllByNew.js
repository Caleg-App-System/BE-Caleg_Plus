const { Dpp, Tps, Desa, Kecamatan, User } = require("../../models");

module.exports = {
  getAllByNew: async (request, reply) => {
    try {
      const find = await Dpp.findAll({
        where: { is_new: true },
        include: [
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
          {
            model: User,
            as: "user",
            attributes: {
              exclude: [
                "createdAt",
                "updatedAt",
                "password",
                "email_token",
                "email",
                "username",
                "photo",
                "photo_ktp",
              ],
            },
          },
        ],
      });

      if (!find) {
        return reply.code(404).send({
          status: false,
          message: "data not found",
          data: null,
        });
      }

      reply.code(200).send({
        status: true,
        message: "berhasil mengambil data DPT baru",
        data: find,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
