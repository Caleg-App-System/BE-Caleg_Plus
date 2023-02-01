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

      if (!username) {
        return res.code(400).send({
          message: "username is required",
        });
      }

      if (!password) {
        return res.code(400).send({
          message: "password is required",
        });
      }

      if (username.length < 6) {
        return res.code(400).send({
          message: "username must be at least 6 characters",
        });
      }

      if (password.length < 8) {
        return res.code(400).send({
          message: "password must be at least 8 characters",
        });
      }

      if (
        user.is_verified_account === VERIFIED.FALSE &&
        user.is_verified_role === VERIFIED.FALSE
      ) {
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
          token,
          user,
        },
      });
    } catch (err) {
      console.log(err);
    }
  },
};
