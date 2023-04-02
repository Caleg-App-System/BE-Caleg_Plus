const { User } = require("../../models");
const { VERIFIED } = require("../../utils/enum.js");

module.exports = {
  activateRole: async (request, reply) => {
    try {
      const { id } = request.params;

      const user = await User.findOne({ where: { id } });

      if (!user) {
        return res.code(404).send({
          message: "user not found",
        });
      }

      const updatedUser = await User.update(
        {
          is_verified_role: VERIFIED.TRUE,
        },
        {
          where: { id },
        }
      );

      return reply.code(200).send({
        status: true,
        message: "user role updated successfully",
        data: updatedUser,
      });
    } catch (err) {
      console.log(err);
    }
  },
  activateAccount: async (request, reply) => {
    try {
      const { id } = request.params;
      const { is_verified_account = VERIFIED.TRUE } = request.body;

      const user = await User.findOne({ where: { id } });

      if (!user) {
        return reply.code(404).send({
          message: "user not found",
        });
      }

      const updatedUser = await User.update({
        is_verified_account,
      });

      return reply.code(200).send({
        status: true,
        message: "user account updated successfully",
        data: updatedUser,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
