const { User } = require("../../models");

module.exports = {
  getAll: async (request, reply) => {
    try {
      const users = await User.findAll();

      if (!users) {
        return reply.code(404).send({
          status: false,
          message: "no users found",
          data: null,
        });
      }

      return reply.code(200).send({
        status: true,
        message: "get users successfull",
        data: users,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
