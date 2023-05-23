const { Dpp, Tps, Desa, Kecamatan, User } = require("../../models");
const { Op } = require("sequelize");
module.exports = {
  getAllByCheck: async (request, reply) => {
    try {
      const { page = 1, limit = 10, user_id = 1 } = request.query;
      const offset = (page - 1) * limit;
      const { count, rows } = await Dpp.findAndCountAll({
        where: {
          [Op.and]: [
            {
              user_id: {
                [Op.like]: `${user_id}`,
              },
            },
            {
              is_check: true,
            },
          ],
        },
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
        offset: Number(offset),
        limit: Number(limit),
      });

      if ((!count, !rows)) {
        return reply.code(404).send({
          status: false,
          message: "data not found",
          data: null,
        });
      }

      const totalPages = Math.ceil(count / limit); // Menghitung jumlah halaman

      reply.code(200).send({
        status: true,
        message: "berhasil mengambil data DPP",
        data: {
          data: rows,
          totalPages: totalPages,
          currentPage: page,
          jumlahData: count,
        },
      });
    } catch (err) {
      console.log(err);
    }
  },
};
