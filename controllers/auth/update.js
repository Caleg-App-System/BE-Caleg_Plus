const { User } = require("../../models");
const { ROLE, VERIFIED } = require("../../utils/enum.js");

module.exports = {
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { is_verified_role } = req.body;

      const user = await User.findOne({ where: { id } });

      if (!user) {
        return res.code(404).send({
          message: "User not found",
        });
      }
    } catch (err) {
      console.log(err);
    }
  },
};
