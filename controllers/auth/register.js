const { User, Verify } = require("../../models");
const { ROLE, VERIFIED } = require("../../utils/enum");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require("node:crypto");
const activateAccount = require("../../utils/email/activateAccountEmail.js");
const { sendEmail } = require("../../utils/email/email.js");

module.exports = {
  register: async (request, reply) => {
    try {
      const {
        email,
        username,
        password,
        name,
        phone,
        address,
        working_area,
        role,
        email_token,
      } = request.body;
      const filePhoto = request.files["filePhoto"];
      const filePhoto_ktp = request.files["filePhoto_ktp"];

      const userUsername = await User.findOne({
        where: { username },
      });
      const userEmail = await User.findOne({
        where: { email },
      });

      if (userUsername || userEmail) {
        return reply.code(409).send({
          status: false,
          message: "Email or username already exists",
        });
      }

      if (username.length < 6) {
        return reply.code(409).send({
          message: "Username must be at least 6 characters",
        });
      }

      if (password.length < 8) {
        return reply.code(409).send({
          message: "Password must be at least 8 characters",
        });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const token = crypto.randomBytes(32).toString("hex");
      console.log(token);

      const newUser = await User.create({
        email,
        username,
        password: hashedPassword,
        name,
        phone,
        address,
        photo: filePhoto,
        photo_ktp: filePhoto_ktp,
        role,
        working_area,
        email_token: token,
        is_archived: VERIFIED.FALSE,
        is_verified_account: VERIFIED.FALSE,
        is_verified_role: VERIFIED.FALSE,
      });

      // send email verification
      const templateEmail = {
        to: email.toLowerCase(),
        subject: "Email Verification",
        html: activateAccount(
          `https://caleg-plus.netlify.app/success/verification?token=${token}`
        ),
      };

      await sendEmail(templateEmail);

      return reply.code(201).send({
        status: true,
        message: "user created successfully",
        data: newUser,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
