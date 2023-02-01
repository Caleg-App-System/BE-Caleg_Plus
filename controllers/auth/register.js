const { User } = require("../../models");
const { ROLE, VERIFIED } = require("../../utils/enum");
const bcrypt = require("bcrypt");

module.exports = {
  register: async (req, res) => {
    try {
      const {
        email,
        username,
        password,
        name,
        phone,
        photo,
        role,
        is_verified_account = VERIFIED.FALSE,
        is_verified_role = VERIFIED.FALSE,
      } = req.body;

      const user = await User.findOne({ where: { email } });

      if (user) {
        return res.code(409).send({
          message: "Email already exists",
        });
      }

      if (username.length < 6) {
        return res.code(409).send({
          message: "Username must be at least 6 characters",
        });
      }

      if (password.length < 8) {
        return res.code(409).send({
          message: "Password must be at least 8 characters",
        });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = await User.create({
        email,
        username,
        password: hashedPassword,
        name,
        phone,
        photo,
        role,
        is_verified_account: VERIFIED.FALSE,
        is_verified_role: VERIFIED.FALSE,
      });

      return res.code(201).send({
        status: true,
        message: "user created successfully",
        data: newUser,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
