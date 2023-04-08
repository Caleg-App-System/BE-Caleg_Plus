const { Dpp, Kecamatan, Desa, Tps } = require("../../models");
const xlsx = require("xlsx");

module.exports = {
  create: async (request, reply) => {
    try {
      if (!request.file) {
        return reply.code(404).send({
          status: false,
          message: "file tidak di temukan",
          data: null,
        });
      }

      const file = request.file;
      const { startCell, endCell, tps_id, noSheet } = request.body;

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
        12: "disability",
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

      const find = await Dpp.findOne({ where: data["no_KK"] });

      if (find) {
        return reply.code(409).send({
          status: false,
          message: "data sudah ada",
          data: null,
        });
      }

      // Insert data to database
      const created = await Dpp.bulkCreate(data);

      return reply.code(200).send({
        status: true,
        message: "data berhasil diinputkan",
        data: created,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
