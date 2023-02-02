const { User } = require("../../models");
const { VERIFIED } = require("../../utils/enum.js");

module.exports = {
  activateRole: async (req, res) => {
    try {
      const { id } = req.params;

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

      return res.code(200).send({
        status: true,
        message: "user role updated successfully",
        data: updatedUser,
      });
    } catch (err) {
      console.log(err);
    }
  },
  activateAccount: async (req, res) => {
    try {
      const { id } = req.params;
      const { is_verified_account = VERIFIED.TRUE } = req.body;

      const user = await User.findOne({ where: { id } });

      if (!user) {
        return res.code(404).send({
          message: "user not found",
        });
      }

      const updatedUser = await User.update({
        is_verified_account,
      });

      return res.code(200).send({
        status: true,
        message: "user account updated successfully",
        data: updatedUser,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
