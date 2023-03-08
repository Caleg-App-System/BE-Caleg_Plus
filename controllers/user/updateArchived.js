const { User } = require("../../models");

module.exports = {
  updateArchived: async (req, res) => {
    const { id } = req.params;

    const { is_archived } = req.body;

    const find = await User.findOne({ where: id });

    if (!find) {
      return res.code(404).send({
        status: false,
        message: "data not found",
        data: null,
      });
    }

    const updated = await User.update({
      is_archived,
    });

    return res.code(200).send({
      status: true,
      message: "update data successful",
      data: updated,
    });
  },
};
