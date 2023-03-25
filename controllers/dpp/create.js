const { Dpp, Kecamatan, Desa, Tps } = require("../../models");
const xlsx = require("xlsx");

module.exports = {
  create: async (req, res) => {
    try {
      if (!req.file) {
        return res.code(404).send({
          status: false,
          message: "file tidak di temukan",
          data: null,
        });
      }

      const file = req.file;
      const { startCell, endCell, tps_id, noSheet } = req.body;

      // Read file using xlsx
      const workBook = xlsx.readFile(file.path);
      const sheetName = workBook.SheetNames[noSheet];
      const workSheet = workBook.Sheets[sheetName];

      // Decode range
      const range = xlsx.utils.decode_range(`${startCell}:${endCell}`);

      const data = [];

      const keymap = {
        2: "no_KK",
        3: "nik",
        4: "name",
        5: "dob_place",
        6: "dob",
        7: "marital_status",
        8: "gender",
        9: "address",
        10: "rt",
        11: "rw",
        12: "disabilty",
        13: "keterangan",
        14: "tps_id",
      };

      let alamat = "";

      // Loop through each row within the range
      for (let row = range.s.r; row <= range.e.r; row++) {
        let rowData = {};

        // Loop through each column within the range
        for (let col = range.s.c; col <= range.e.c; col++) {
          let cellAddress = xlsx.utils.encode_cell({ r: row, c: col });
          let cellValue = workSheet[cellAddress]
            ? workSheet[cellAddress].v
            : "";

          if (col >= 8 && col <= 10) {
            rowData["address"] = `${rowData["address"] || ""} ${cellValue}`;
          } else {
            rowData[keymap[col + 1]] = cellValue;
          }
        }
        rowData[keymap[14]] = tps_id;

        // Add row data to data array
        data.push(rowData);
      }

      // Insert data to database
      // const created = await Dpp.bulkCreate(data);

      return res.code(200).send({
        status: true,
        message: "data berhasil diinputkan",
        data: data,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
