// const { PoliticalParty } = require("../../models");
// // const upload = require("../../middlewares/upload.js");
// const xlsx = require("xlsx");
// const { testing } = require("googleapis/build/src/apis/testing");

// module.exports = {
//   create: async (req, res) => {
//     try {
//       const file = req.file;

//       // Read file using xlsx
//       const workBook = xlsx.readFile(file.path);
//       const sheetName = workBook.SheetNames[0];
//       const workSheet = workBook.Sheets[sheetName];

//       const startCell = "A85";
//       const endCell = "Z423";
//       const range = xlsx.utils.decode_range(`${startCell}:${endCell}`);

//       const data = [];
//       const colNumber = 0;
//       const colNoUrut = 1;
//       const colNama = [
//         2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
//         22, 23, 24, 25,
//       ];
//       for (let row = range.s.r; row <= range.e.r; row++) {
//         let numberAddress = "";
//         let numberNoUrut = "";
//         let namaAddress = "";
//         for (let col = range.s.c; col <= colNama.length; col++) {
//           if (col == colNumber) {
//             numberAddress = xlsx.utils.encode_cell({ r: row, c: col });
//           }
//           if (col == colNoUrut) {
//             numberNoUrut = xlsx.utils.encode_cell({ r: row, c: col });
//           }
//           if (col == colNama) {
//             namaAddress = xlsx.utils.encode_cell({ r: row, c: col });
//           }
//         }
//         console.log("number ", numberAddress);
//         console.log("nomorUrut ", numberNoUrut);
//         console.log("nama ", namaAddress);

//         let numberUrut = workSheet[numberNoUrut]
//           ? workSheet[numberNoUrut].v
//           : "";

//         console.log("numberUrut ", numberUrut);

//         if (numberUrut == "" || numberUrut == null) {
//           continue;
//         }

//         const rowData = {};

//         let number = workSheet[numberAddress] ? workSheet[numberAddress].v : "";
//         if (colNama.includes("IV")) {
//           rowData["nama"] = "TPS";
//         }
//         if (number.includes("A.1")) {
//           rowData["data"] = "partai";
//         } else {
//           rowData["data"] = "caleg";
//         }

//         let nama = workSheet[namaAddress] ? workSheet[namaAddress].v : "";
//         rowData["nama"] = nama;

//         if (nama == "" || nama == null) {
//           continue;
//         }
//         data.push(rowData);
//       }

//       return res.code(201).send({
//         status: true,
//         message: "create succesfull",
//         data: data,
//       });
//     } catch (err) {
//       console.log(err);
//     }
//   },
// };

// for (let col = range.s.c; col <= range.e.c; col++) {
//   const cellAddress = xlsx.utils.encode_cell({ r: row, c: col });
//   let cellValue = workSheet[cellAddress]
//     ? workSheet[cellAddress].v
//     : "";

//   if (cellValue == cellValue.includes("Partai ")) {
//     cellValue =
//       workSheet[cellAddress] + 2 ? workSheet[cellAddress].v : "";
//   }
//   rowData.push(cellValue);
// }

// if (cellValue == "A.1") {
//   cellValue =
//     workSheet[cellAddress] + 2 ? workSheet[cellAddress].v : "";
// } else {
//   continue;
// }

// const cellAddress = xlsx.utils.encode_cell({ r: row, c: col });
// let cellValue = workSheet[cellAddress]
//   ? workSheet[cellAddress].v
//   : "";

// rowData.push(cellValue);

//   const mapping = data.forEach((item) => {
//     let newobj = {};
//     let filter = item.filter((e) => {
//       return e.includes("Partai ");
//     });
//     console.log(filter);
//   });

const { PoliticalParty, Suara } = require("../../models");
const xlsx = require("xlsx");

module.exports = {
  create: async (request, reply) => {
    try {
      // Cek apakah ada file yang di-upload
      if (!request.file) {
        return reply.code(400).send({
          message: "No file uploaded",
        });
      }

      const file = request.file;
      console.log(file);
      const { startCell, endCell } = req.body;

      // Read file using xlsx
      const workBook = xlsx.readFile(file.path);
      const sheetName = workBook.SheetNames[0];
      const workSheet = workBook.Sheets[sheetName];

      // Definisikan range kolom nama
      const colNama = [
        2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
        22, 23, 24, 25,
      ];

      // Definisikan range sel yang ingin dibaca
      const range = xlsx.utils.decode_range(`${startCell}:${endCell}`);

      const data = [];

      // Loop pada setiap baris dalam range
      for (let row = range.s.r; row <= range.e.r; row++) {
        let rowData = {};

        // Loop pada setiap kolom dalam range nama
        for (let i = 0; i < colNama.length; i++) {
          let col = colNama[i];
          let cellAddress = xlsx.utils.encode_cell({ r: row, c: col });
          let cellValue = workSheet[cellAddress]
            ? workSheet[cellAddress].v
            : "";

          // Tambahkan data ke dalam rowData
          rowData[`nama${i + 1}`] = cellValue;
        }

        // Tambahkan rowData ke dalam array data
        data.push(rowData);
      }

      // Simpan data ke dalam database
      // await PoliticalParty.bulkCreate(data);

      return reply.code(201).send({
        message: "Data has been saved",
        data: data,
      });
    } catch (err) {
      console.log(err);
      return reply.code(500).send({
        message: "Error while processing the request",
      });
    }
  },
};
