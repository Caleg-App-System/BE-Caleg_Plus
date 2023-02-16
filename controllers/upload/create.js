const { Caleg } = require("../../models");

const readXlsxFile = require("read-excel-file/node");

module.exports = {
  upload: async (req, res) => {
    try {
      if (req.file == undefined) {
        return res.code(400).send({
          message: "please upload an excel file",
        });
      }

      let path = __basedir + "/uploads/" + req.file.filename;

      readXlsxFile(path).then((rows) => {
        rows.shift();

        let arr = [];

        rows.forEach((row) => {
          let newObj = {
            name: row[0],
            position: row[1],
            political_party_id: row[2],
          };

          arr.push(newObj);
        });

        Caleg.create(arr).then(() => {
          return res.code(201).send({
            status: true,
            message: "created caleg successfully" + req.file.originalname,
            data: arr,
          });
        });
      });
    } catch (err) {
      console.log(err);
    }
  },
};
