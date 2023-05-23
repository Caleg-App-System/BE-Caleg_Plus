const { User, Verify } = require("../../models");
const { ROLE, VERIFIED } = require("../../utils/enum");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require("node:crypto");
const activateAccount = require("../../utils/email/activateAccountEmail.js");
const { sendEmail } = require("../../utils/email/email.js");
const image2Base64 = require("image-to-base64");

module.exports = {
  register: async (request, reply) => {
    try {
      const {
        email,
        username,
        password,
        name,
        phone,
        photo,
        photo_ktp,
        address,
        working_area,
        role,
        email_token,
      } = request.body;

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

      const newUser = await User.create({
        email,
        username,
        password: hashedPassword,
        name,
        phone,
        address,
        photo,
        photo_ktp,
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
          `https://bitingku.com/success/verification?token=${token}`
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
  Newregister: async (request, reply) => {
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

      const photo = request.files["photo"];
      const photo_ktp = request.files["photo_ktp"];

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

      const convertPhoto = await image2Base64(`${photo[0].path}`)
        .then((response) => {
          return response;
        })
        .catch((err) => {
          console.log(err);
        });

      const convertPhotoKtp = await image2Base64(`${photo_ktp[0].path}`)
        .then((response) => {
          return response;
        })
        .catch((err) => {
          console.log(err);
        });

      const newUser = await User.create({
        email,
        username,
        password: hashedPassword,
        name,
        phone,
        address,
        photo: convertPhoto,
        photo_ktp: convertPhotoKtp,
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
          `https://bitingku.com/success/verification?token=${token}`
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
