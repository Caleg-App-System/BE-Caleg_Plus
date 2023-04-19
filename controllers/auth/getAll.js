const { User } = require("../../models");

module.exports = {
  getAllIsArchiveFalse: async (request, reply) => {
    try {
      const users = await User.findAll({
        order: [["id", "DESC"]],
        where: { is_archived: false },
      });

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
  getAllIsArchiveTrue: async (request, reply) => {
    try {
      const users = await User.findAll({
        order: [["name", "ASC"]],
        where: { is_archived: true },
      });

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
