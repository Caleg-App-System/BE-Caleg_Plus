require("dotenv").config();
const { User } = require("../../models");
const jwt = require("jsonwebtoken");
const { VERIFIED } = process.env;

module.exports = {
  verify: async (req, res) => {
    try {
      const { token } = req.params;

      const user = await User.findOne({ where: { token } });

      if (!user) {
        return res.code(404).send({
          status: false,
          message: "user not found",
        });
      }

      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

      const updateUser = await User.update(
        {
          is_verified_account: VERIFIED.TRUE,
        },
        { where: { id: decoded.id } }
      );

      return res.redirect("http://localhost:3000/login");
    } catch (err) {
      console.log(err);
    }
  },
};
