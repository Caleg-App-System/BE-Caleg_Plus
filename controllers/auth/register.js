const { User } = require("../../models");
const { ROLE, VERIFIED } = require("../../utils/enum");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const activateAccount = require("../../utils/email/activateAccountEmail.js");
const { sendEmail } = require("../../utils/email/email.js");

module.exports = {
  register: async (req, res) => {
    try {
      const { email, username, password, name, phone, photo, role } = req.body;

      const user = await User.findOne({ where: { email, username } });

      if (user) {
        return res.code(409).send({
          message: "Email or username already exists",
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

      const payload = {
        id: newUser.id,
        username: newUser.username,
        role: newUser.role,
      };

      const token = jwt.sign(payload, process.env.JWT_SECRET_KEY);

      // send email verification
      const templateEmail = {
        to: email.toLowerCase(),
        subject: "Email Verification",
        html: activateAccount(`http://localhost:3000/verify/${token}`),
      };

      await sendEmail(templateEmail);

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
