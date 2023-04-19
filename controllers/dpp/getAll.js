const { Dpp, Tps, Desa, Kecamatan, sequelize } = require("../../models");
const { Op } = require("sequelize");

module.exports = {
  getAll: async (request, reply) => {
    try {
      const { page = 1, limit = 10, tps_id = "", desa_id = "" } = request.query; // Mengambil query page dan fields
      const offset = (page - 1) * limit; // Menghitung offset

      const { count, rows } = await Dpp.findAndCountAll({
        where: {
          [Op.and]: [
            {
              tps_id: {
                [Op.like]: `${tps_id}%`,
              },
            },
            {
              desa_id: {
                [Op.like]: `${desa_id}%`,
              },
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
                where: {
                  id: desa_id,
                },
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
        message: "berhasil mengambil data",
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
