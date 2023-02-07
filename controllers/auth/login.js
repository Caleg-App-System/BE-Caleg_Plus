const { User } = require("../../models");
const bcrypt = require("bcrypt");
const { ROLE, VERIFIED } = require("../../utils/enum");
const jwt = require("jsonwebtoken");
const { JWT_SECRET_KEY } = process.env;

module.exports = {
  login: async (req, res) => {
    try {
      const { username, password } = req.body;

      const user = await User.findOne({ where: { username } });
      if (!user) {
        return res.code(404).send({
          message: "user not found",
        });
      }

      if (user.is_verified_role === VERIFIED.FALSE) {
        return res.code(401).send({
          message: "user is not verified",
        });
      }

      if (user.is_verified_account === VERIFIED.FALSE) {
        return res.code(401).send({
          message: "user is not verified",
        });
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.code(401).send({
          message: "password is invalid",
        });
      }

      const payload = {
        id: user.id,
        username: user.username,
        role: user.role,
      };

      const token = jwt.sign(payload, JWT_SECRET_KEY);

      return res.code(200).send({
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
