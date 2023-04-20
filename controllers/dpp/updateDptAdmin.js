const { Dpp } = require("../../models");
const { VERIFIED } = require("../../utils/enum");
const jwt = require("jsonwebtoken");
const { JWT_SECRET_KEY } = process.env;

module.exports = {
  update: async (request, reply) => {
    try {
      const { id } = request.params;

      const {
        no_KK,
        nik,
        name,
        dob_place,
        dob,
        marital_status,
        gender,
        address,
        disability,
        keterangan,
        phone,
        photo_KK,
        photo_KTP,
        tps_id,
        desa_id,
        usia,
        rt,
        rw,
      } = request.body;

      // const findNik = await Dpp.findOne({ where: { tps_id } });

      const findName = await Dpp.findOne({ where: { id } });

      if (!findName) {
        return request.code(404).send({
          status: false,
          message: "data not found",
          data: null,
        });
      }

      const updated = await Dpp.update(
        {
          no_KK,
          nik,
          name,
          dob_place,
          dob,
          marital_status,
          gender,
          address,
          disability,
          keterangan,
          phone,
          photo_KK,
          photo_KTP,
          tps_id,
          desa_id,
          usia,
          rt,
          rw,
        },
        { where: { id } }
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
