const { User } = require("../../models");

module.exports = {
  getById: async (req, res) => {
    try {
      const { id } = req.params;

      const user = await User.findOne({ where: { id } });
      if (!user) {
        return res.code(404).send({
          message: "user not found",
        });
      }

      return res.code(200).send({
        status: true,
        message: "get user successfully",
        data: user,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
