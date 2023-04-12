const { User } = require("../../models");
const bcrypt = require("bcrypt");
const { ROLE, VERIFIED } = require("../../utils/enum");
const jwt = require("jsonwebtoken");
const { JWT_SECRET_KEY } = process.env;

module.exports = {
  login: async (request, reply) => {
    try {
      const { username, password } = request.body;

      const user = await User.findOne({ where: { username } });
      if (!user) {
        return reply.code(404).send({
          message: "user tidak di temukan",
        });
      }

      if (user.is_verified_role === VERIFIED.FALSE) {
        return reply.code(401).send({
          message: `user belum terverifikasi, silakan hubungi admin untuk aktivasi akun ${user.username} `,
        });
      }

      if (user.is_verified_account === VERIFIED.FALSE) {
        return reply.code(401).send({
          message: `user belum terverifikasi, silakan aktivasi akun anda yang telah dikirim ke email ${user.email} `,
        });
      }

      if (user.is_archived === VERIFIED.TRUE) {
        return reply.code(401).send({
          message: "user di arsipkan, silakan kontak admin untuk lebih lanjut",
        });
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return reply.code(401).send({
          message: "password tidak sesuai",
        });
      }

      const payload = {
        id: user.id,
        username: user.username,
        role: user.role,
      };

      const token = jwt.sign(payload, JWT_SECRET_KEY);

      return reply.code(200).send({
        status: true,
        message: "user logged in successfully",
        data: {
          user,
        },
        token,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
