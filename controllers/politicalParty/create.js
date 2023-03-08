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

      const startCell = "A88";
      const endCell = "C412";
      const range = xlsx.utils.decode_range(`${startCell}:${endCell}`);

      const data = [];

      
      const colNumber = 0
      const colNoUrut = 1
      const colNama = 2
      for (let row = range.s.r; row <= range.e.r; row++) {

        let numberAddress = ''
        let numberNoUrut = ''
        let namaAddress = ''
        for (let col = range.s.c; col <= range.e.c; col++) {
          if (col == colNumber) {
            numberAddress = xlsx.utils.encode_cell({ r: row, c: col });
          }
          if (col == colNoUrut) {
            numberNoUrut = xlsx.utils.encode_cell({ r: row, c: col });
          }
          if (col == colNama) {
            namaAddress = xlsx.utils.encode_cell({ r: row, c: col });
          }
        }

        console.log("number ", numberAddress)
        console.log("nomorUrut ", numberNoUrut)
        console.log("nama ", namaAddress)

        let numberUrut = workSheet[numberNoUrut] ? workSheet[numberNoUrut].v : ""

        console.log("numberUrut ", numberUrut)

        if (numberUrut == '' || numberUrut == null) {
          continue
        }

        const rowData = {};
        let number = workSheet[numberAddress] ? workSheet[numberAddress].v : ""

        if (number.includes("A.1")) {
          rowData["data"] = "partai"
        } else {
          rowData["data"] = "caleg"
        }

        let nama = workSheet[namaAddress] ? workSheet[namaAddress].v : ""
        rowData["nama"] = nama
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
        if (nama == '' || nama == null) {
          continue

          const cellAddress = xlsx.utils.encode_cell({ r: row, c: col });
          let cellValue = workSheet[cellAddress]
            ? workSheet[cellAddress].v
            : "";

        console.log("numberUrut ", numberUrut);

        if (numberUrut == "" || numberUrut == null) {
          continue;
        }

        const rowData = {};
        let number = workSheet[numberAddress] ? workSheet[numberAddress].v : "";

        if (number.includes("A.1")) {
          rowData["data"] = "partai";
        } else {
          rowData["data"] = "caleg";
        }

        let nama = workSheet[namaAddress] ? workSheet[namaAddress].v : "";
        rowData["nama"] = nama;

        if (nama == "" || nama == null) {
          continue;

          rowData.push(cellValue);


        }
        data.push(rowData);
      }

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
