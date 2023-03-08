const { User } = require("../../models");
const { VERIFIED } = require("../../utils/enum.js");

module.exports = {
  updateArchivedTrue: async (req, res) => {
    const { username } = req.params;

    const find = await User.findOne({ where: username });

    if (!find) {
      return res.code(404).send({
        status: false,
        message: "data not found",
        data: null,
      });
    }

    const updated = await User.update(
      {
        is_archived: VERIFIED.TRUE,
      },
      { where: { username } }
    );

    return res.code(200).send({
      status: true,
      message: `User dengan nama ${username} berhasil di arsipkan`,
      data: updated,
    });
  },
  updateArchivedFalse: async (req, res) => {
    const { username } = req.params;

    const find = await User.findOne({ where: username });

    if (!find) {
      return res.code(404).send({
        status: false,
        message: "data not found",
        data: null,
      });
    }

    const updated = await User.update(
      {
        is_archived: VERIFIED.FALSE,
      },
      { where: { username } }
    );

    return res.code(200).send({
      status: true,
      message: `User dengan nama ${username} berhasil di aktifkan`,
      data: updated,
    });
  },
};
