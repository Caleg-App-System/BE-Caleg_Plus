const { User } = require("../../models");

module.exports = {
  count: async (request, reply) => {
    try {
      const user = await User.count();
      return reply.code(200).send({
        status: true,
        message: "success",
        data: user,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
