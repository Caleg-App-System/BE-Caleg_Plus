const { User } = require("../../models");
const jwt = require("jsonwebtoken");
const { JWT_SECRET_KEY } = process.env;

module.exports = {
  updateBio: async (req, res) => {
    try {
      const token = req.headers["authorization"].split("Bearer ")[1];
      const user = jwt.sign(token, JWT_SECRET_KEY);

      const { name, phone, address, working_area } = req.body;

      const updated = await User.update(
        {
          name,
          phone,
          address,
          working_area,
        },
        { where: { id: user.id } }
      );

      return res.code(200).send({
        status: true,
        message: "update data success!",
        data: updated,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
