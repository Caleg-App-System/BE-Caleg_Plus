require("dotenv").config();
const { User, Verify } = require("../../models");
const jwt = require("jsonwebtoken");
const { VERIFIED } = require("../../utils/enum.js");

module.exports = {
  verify: async (request, reply) => {
    try {
      const { token } = request.body;

      const user = await User.findOne({ where: { email_token: token } });

      if (!user) {
        return reply.code(404).send({
          message: "user not found",
        });
      }

      const updatedUser = await User.update(
        {
          is_verified_account: VERIFIED.TRUE,
        },
        {
          where: { email_token: token },
        }
      );

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
