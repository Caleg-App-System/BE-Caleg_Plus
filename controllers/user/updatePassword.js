const { User } = require("../../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { JWT_SECRET_KEY } = process.env;

module.exports = {
  updatePassword: async (request, reply) => {
    try {
      const token = request.headers.authorization.split("Bearer ")[1];
      const verify = jwt.verify(token, JWT_SECRET_KEY);

      const { oldPassword, newPassword, confirmNewPassword } = request.body;

      const findUser = await User.findOne({ where: { id: verify.id } });

      const compare = await bcrypt.compare(oldPassword, findUser.password);

      if (!compare) {
        return reply.code(400).send({
          status: false,
          message: "Old password is wrong",
        });
      }

      if (newPassword !== confirmNewPassword) {
        return reply.code(400).send({
          status: false,
          message: "New password and confirm new password is not same",
        });
      }

      const hash = await bcrypt.hash(newPassword, 10);

      const user = await User.update(
        {
          password: hash,
        },
        { where: { id: verify.id } }
      );

      return reply.code(200).send({
        status: true,
        message: "Password has been updated",
        data: user,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
