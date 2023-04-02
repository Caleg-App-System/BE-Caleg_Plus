const { User } = require("../../models");

module.exports = {
  getById: async (request, reply) => {
    try {
      const { id } = request.params;

      const user = await User.findOne({ where: { id } });
      if (!user) {
        return reply.code(404).send({
          message: "user not found",
        });
      }

      return reply.code(200).send({
        status: true,
        message: "get user successfully",
        data: user,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
