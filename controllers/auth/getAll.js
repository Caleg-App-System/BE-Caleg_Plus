const { User } = require("../../models");

module.exports = {
  getAll: async (req, res) => {
    try {
      const users = await User.findAll();

      if (!users) {
        return res.code(404).send({
          status: false,
          message: "no users found",
          data: null,
        });
      }

      return res.code(200).send({
        status: true,
        message: "get users successfull",
        data: users,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
