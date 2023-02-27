const { PoliticalParty } = require("../../models");
// const upload = require("../../middlewares/upload.js");
const xlsx = require("xlsx");
const { testing } = require("googleapis/build/src/apis/testing");

module.exports = {
  create: async (req, res) => {
    try {
      const file = req.file;

      // Read file using xlsx
      const workBook = xlsx.readFile(file.path);
      const sheetName = workBook.SheetNames[0];
      const workSheet = workBook.Sheets[sheetName];

      const startCell = "C88";
      const endCell = "C412";
      const range = xlsx.utils.decode_range(`${startCell}:${endCell}`);

      const data = [];
      for (let row = range.s.r; row <= range.e.r; row++) {
        const rowData = [];
        for (let col = range.s.c; col <= range.e.c; col++) {
          const cellAddress = xlsx.utils.encode_cell({ r: row, c: col });
          let cellValue = workSheet[cellAddress]
            ? workSheet[cellAddress].v
            : "";

          // if (cellValue == "A.1") {
          //   cellValue =
          //     workSheet[cellAddress] + 2 ? workSheet[cellAddress].v : "";
          // } else {
          //   continue;
          // }

          rowData.push(cellValue);
        }
        data.push(rowData);
      }

      //   const mapping = data.forEach((item) => {
      //     let newobj = {};
      //     let filter = item.filter((e) => {
      //       return e.includes("Partai ");
      //     });
      //     console.log(filter);
      //   });

      return res.code(201).send({
        status: true,
        message: "create succesfull",
        data: data,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
