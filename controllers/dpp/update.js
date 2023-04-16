const { Dpp } = require("../../models");
const { VERIFIED } = require("../../utils/enum");
const jwt = require("jsonwebtoken");
const { JWT_SECRET_KEY } = process.env;

module.exports = {
  update: async (request, reply) => {
    try {
      const token = request.headers["authorization"].split("Bearer ")[1];
      const user = jwt.verify(token, JWT_SECRET_KEY);

      const { name, usia } = request.query;

      const { photo_KTP, photo_KK, keterangan } = request.body;

      // const findNik = await Dpp.findOne({ where: { tps_id } });

      const findName = await Dpp.findOne({ where: { name } });

      if (!findName) {
        return request.code(404).send({
          status: false,
          message: "data not found",
          data: null,
        });
      }

      const updated = await Dpp.update(
        {
          keterangan,
          photo_KK,
          photo_KTP,
          is_check: VERIFIED.TRUE,
          is_new: VERIFIED.FALSE,
          is_under_age: VERIFIED.FALSE,
          user_id: user.id,
        },
        { where: { name, usia } }
      );

      return reply.code(200).send({
        status: true,
        message: "berhasil update dpt",
        data: updated,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
